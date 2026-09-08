import type { Env } from './env';
import { handleChatRoute } from './module-1.1-chat/chat-routes';
import { errorJson } from './lib/http';

export async function route(request: Request, env: Env): Promise<Response> {
  const url = new URL(request.url);
  if (url.pathname === '/healthz') return new Response('ok', { status: 200 });
  if (url.pathname === '/api/chat') return handleChatRoute(request, env);
  if (env.ASSETS) return env.ASSETS.fetch(request);
  return errorJson('ไม่พบเส้นทางนี้', 404);
}