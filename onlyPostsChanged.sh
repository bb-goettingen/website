#!/bin/sh
CHANGED_FILES=$(git diff --name-only $TRAVIS_COMMIT_RANGE)

if [ "$TRAVIS_BRANCH" = "develop" ]; then exit 0; fi

while read -r line; do
  if case $line in src/posts/*) false;; "") false;; *) true;; esac; then
    echo "Changed files:"
    printf "  %s\n" $CHANGED_FILES
    echo "A file outside of src/posts/ was modified - Test failed..."
    exit 1
  fi
done <<< "$CHANGED_FILES"

echo "Test passed..."
exit 0
