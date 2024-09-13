#!/usr/bin/env bash

set -euo pipefail

echo_color() {
  local RED='\033[32m'
  local RESET='\033[0m'
  echo -e "${RED}$1${RESET}"
}

if [[ -z "${1-}" ]]; then
    echo_color "No Tag parameter detected, using 'datamate/seafile-professional:latest'"
    SEAFILE_VERSION='latest'
else
    echo_color "Input parameter detected, using 'datamate/seafile-professional:${1}'"
    SEAFILE_VERSION="$1"
fi

echo_color "If you want to use another tag, please stop the execution and restart again with '$0 <tag>'."
echo_color "The script will continue in 5 seconds..."
sleep 5

echo "... let's go"
echo "... Download SeaTable Container"
# Concat CSS files from container
docker run --rm -it --pull=always --quiet "datamate/seafile-professional:${SEAFILE_VERSION}" find /opt/seafile/seafile-pro-server-${SEAFILE_VERSION}/seahub/media ! -name 'fontawesome*.css' ! -name 'bootstrap*.css' -name '*.css' -exec cat {} \; > ./custom.css

echo "... create initial custom.css"
# Manipulate custom.css
docker run --rm --quiet -v $(pwd):/app/ --workdir /app php:8.2-cli php /app/manipulate-css.php custom.css

echo "... remove double spaces"
tr -s ' ' < custom.css > output.css

echo "... remove comments"
sed -E 's:/\*[^*]*\*+([^/*][^*]*\*+)*/::g' output.css > custom.css
rm output.css

echo "... sort + remove duplicates (Set LC_ALL to 'C' to make sorting identical to dedupelist.com)"
LC_ALL=C sort -u -o custom.css custom.css

echo "... remove '.btn-primary:hover{color:#fff..."
sed -i -e '/^.btn-primary:hover{color:#fff/d' custom.css 

echo "... finish"
