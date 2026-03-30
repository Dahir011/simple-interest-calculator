#!/bin/bash

echo "Simple Interest Calculator"
read -p "Enter principal: " principal
read -p "Enter rate of interest: " rate
read -p "Enter time period: " time

si=$((principal * rate * time / 100))

echo "Simple Interest = $si"