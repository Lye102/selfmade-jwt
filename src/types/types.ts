// Base64変換時の型情報
export type BinaryCharMap = {
  [key: string]: string;
}

// ASCII文字の詳細情報を表す型
export type ASCIICharacter = {
  char: string;
  dec: number;
  hex: string;
  description: string;
  category: 'control' | 'printable' | 'extended';
};

// ヘッダーの型定義
export type Header = {
  alg: "HS256";
  typ: "JWT";
}

// ペイロードの型定義
export type Payload = {
  sub: string; 
  exp: number;
}