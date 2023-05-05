#!/usr/bin/env bash

echo "start restapi test"
echo "test case 1: get all "
curl "http://localhost:8080/main"
echo -e "\n"

echo "test case 2: Get id" 
curl "http://localhost:8080/main/:id"
echo -e "\n"

echo "test case 3: POST nothing (should return err)"
curl --request POST "http://localhost:8080/main"
echo -e "\n"

echo "test case 4: POST new info"
curl --request POST "http://localhost:8080/main"

echo -e "\n"

echo "test case 5: Update info"
curl --request PATCH "http://localhost:8080/main"
echo -e "\n"

echo "test case 6: delete info"
curl --request DELETE "http://localhost:8080/main"
echo -e "\n"
