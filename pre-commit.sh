#!/bin/sh
#

CYAN='\033[0;36m'
NC='\033[0m' # No Color

#Mad SH skills yo
echo "\033c"
echo "${CYAN}Linting the project${NC}"
npm run lint
RESULT=$?
[ $RESULT -ne 0 ] && exit 1

echo "\033c"
echo "${CYAN}Testing the project${NC}"
npm run test
RESULT=$?
[ $RESULT -ne 0 ] && exit 1
exit 0