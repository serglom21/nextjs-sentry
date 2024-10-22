"use client";

import React from 'react';

export default function ErrorGen() {
  throw new Error("Simulated Error");
  return null;
}