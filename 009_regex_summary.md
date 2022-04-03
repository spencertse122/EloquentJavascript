# Regular Expression Javascript Summary

## Summary
Regular expressions are objects that represent patterns in strings. They use their own language to express these patterns.

## Quick Reference
- /abc/ A sequence of characters
- /[abc]/ Any character from a set of characters
- /[^abc]/ Any character not in a set of characters
- /[0-9]/ Any character in a range of characters
- /x+/ One or more occurrences of the pattern x
- /x+?/ One or more occurrences, nongreedy
- /x*/ Zero or more occurrences
- /x?/ Zero or one occurrence
- /x{2,4}/ Two to four occurrences
- /(abc)/ A group
- /a|b|c/ Any one of several patterns
- /\d/ Any digit character
- /\w/ An alphanumeric character (“word character”)
- /\s/ Any whitespace character
- /./ Any character except newlines
- /\b/ A word boundary
- /^/ Start of input
- /$/ End of input

## methods to use
1. test => whether a given string matches it
2. exec => when a match is found, returns an array containing all matched groups
3. index property =>indicates where the match started

## nuances
1. i option makes the match upper-lower case insensitive
2. g option makes the expression global, matches more than one
3. y option means sticky, it will not search ahead and skip part of the string when looking for a match
4. u option turns on Unicode mode, you can now match non-English and emojis


