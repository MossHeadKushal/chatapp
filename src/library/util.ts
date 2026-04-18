export function formatMessageTime(date:Date) {
  return new Date(date).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

 export interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  createdAt: Date;
}
