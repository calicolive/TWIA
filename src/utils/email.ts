import { z } from 'zod';

export const email = z
  .string({
    required_error: 'Email is required',
  })
  .email('Please enter a valid email.');
