#!/usr/bin/env bash

echo "start restapi test"
echo "test case 1: get all "
curl "http://localhost:8080/main"
echo -e "\n"

echo "test case 2: Get id" 
curl "http://localhost:8080/main/64551c92e251f6f85ff787e6"
echo -e "\n"

echo "test case 3: POST nothing (should return err)"
curl --request POST "http://localhost:8080/main"
echo -e "\n"

echo "test case 4: POST new info"
curl -d '{"name":"test1","info":"here is some info"}' -H 'Content-Type: application/json' --request POST "http://localhost:8080/main"
echo -e "\n"

echo "test case 5: Update info"
curl -d '{"name":"test2","info":"here are other info"}' -H 'Content-Type: application/json' --request PATCH "http://localhost:8080/main/64551cb53b97edddbdcc9c11"
echo -e "\n"

echo "check test case 5"
curl "http://localhost:8080/main/64551cb53b97edddbdcc9c11"
echo -e "\n"

echo "test case 6: delete info"
curl --request DELETE "http://localhost:8080/main/64551c92e251f6f85ff787e6"
echo -e "\n"
