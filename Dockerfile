# Use an official Node runtime as a base image
FROM node:latest as builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code to the working directory
COPY . .

# Build the app
RUN npm run build

