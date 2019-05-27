#!/bin/bash

hlpstr='Usage: ./createEnv.sh react_app_id react_app_server_url react_app_javascript_key react_app_customer_front'

if [ -z "$1" ] || [ -z "$2" ] || [ -z "$3" ] || [ -z "$4" ]; then
    echo "Error! Parameter neaded:
$hlpstr"
    echo
    exit 1
fi

echo "REACT_APP_ID=$1" >> .env
echo "REACT_APP_SERVER_URL=$2" >> .env
echo "REACT_APP_JAVASCRIPT_KEY=$3" >> .env
echo "REACT_APP_CUSTOMER_FRONT=$4" >> .env
echo "REACT_APP_WSS_SERVER_URL=$5" >> .env
