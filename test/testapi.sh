#!/usr/bin/env bash

curl "http://localhost:8080/main"
echo -e "\n"
curl "http://localhost:8080/main/:id"
echo -e "\n"
curl --request POST "http://localhost:8080/main"
echo -e "\n"
curl --request PATCH "http://localhost:8080/main"
echo -e "\n"
curl --request DELETE "http://localhost:8080/main"
echo -e "\n"
