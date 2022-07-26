import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'
import axios from 'axios';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  console.log("hello")
}
