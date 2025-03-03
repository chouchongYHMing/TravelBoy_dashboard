import type { NextConfig } from 'next';
import withMDX from '@next/mdx';

const nextConfig: NextConfig = {
  /* config options here */
  
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};



export default withMDX()(nextConfig);
