#!/bin/bash

echo "Simple Interest Calculator"
read -p "Enter the principal: " principal
read -p "Enter the rate of interest: " rate
read -p "Enter time period: " time

simple_interest=$((principal * rate * time / 100))

echo "The simple interest is: $simple_interest"