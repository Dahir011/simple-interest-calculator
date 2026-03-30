#!/bin/bash

echo "Simple Interest Calculator"
echo

read -p "Enter principal: " principal
read -p "Enter rate of interest: " rate
read -p "Enter time period: " time

simple_interest=$(awk "BEGIN { printf \"%.2f\", ($principal * $rate * $time) / 100 }")

echo
echo "Simple Interest = $simple_interest"