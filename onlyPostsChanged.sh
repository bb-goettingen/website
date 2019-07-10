#!/bin/sh
CHANGED_FILES=$(git diff --name-only $TRAVIS_COMMIT_RANGE)

while read -r line; do
  if case $line in src/posts/*) false;; *) true;; esac; then
    echo "Changed files:"
    printf "  %s\n" $CHANGED_FILES
    echo "A file outside of src/posts/ was modified - Test failed..."
    exit 1
  fi
done <<< "$CHANGED_FILES"

echo "Test passed..."
exit 0
