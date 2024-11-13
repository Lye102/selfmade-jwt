import type { ASCIICharacter } from "../src/types/types.ts";


// ASCII文字コードの完全なマッピング
export const ASCII_CHARS: ASCIICharacter[] = [
  // 制御文字 (0-31)
  { char: 'NUL', dec: 0, hex: '0x00', description: 'Null文字', category: 'control' },
  { char: 'SOH', dec: 1, hex: '0x01', description: 'ヘッダ開始', category: 'control' },
  { char: 'STX', dec: 2, hex: '0x02', description: 'テキスト開始', category: 'control' },
  { char: 'ETX', dec: 3, hex: '0x03', description: 'テキスト終了', category: 'control' },
  { char: 'EOT', dec: 4, hex: '0x04', description: '転送終了', category: 'control' },
  { char: 'ENQ', dec: 5, hex: '0x05', description: '照会', category: 'control' },
  { char: 'ACK', dec: 6, hex: '0x06', description: '肯定応答', category: 'control' },
  { char: 'BEL', dec: 7, hex: '0x07', description: 'ベル', category: 'control' },
  { char: 'BS', dec: 8, hex: '0x08', description: 'バックスペース', category: 'control' },
  { char: 'HT', dec: 9, hex: '0x09', description: '水平タブ', category: 'control' },
  { char: '\n', dec: 10, hex: '0x0A', description: '改行', category: 'control' },
  { char: 'VT', dec: 11, hex: '0x0B', description: '垂直タブ', category: 'control' },
  { char: 'FF', dec: 12, hex: '0x0C', description: '改ページ', category: 'control' },
  { char: '\r', dec: 13, hex: '0x0D', description: 'キャリッジリターン', category: 'control' },
  { char: 'SO', dec: 14, hex: '0x0E', description: 'シフトアウト', category: 'control' },
  { char: 'SI', dec: 15, hex: '0x0F', description: 'シフトイン', category: 'control' },
  { char: 'DLE', dec: 16, hex: '0x10', description: 'データリンクエスケープ', category: 'control' },
  { char: 'DC1', dec: 17, hex: '0x11', description: 'デバイス制御1', category: 'control' },
  { char: 'DC2', dec: 18, hex: '0x12', description: 'デバイス制御2', category: 'control' },
  { char: 'DC3', dec: 19, hex: '0x13', description: 'デバイス制御3', category: 'control' },
  { char: 'DC4', dec: 20, hex: '0x14', description: 'デバイス制御4', category: 'control' },
  { char: 'NAK', dec: 21, hex: '0x15', description: '否定応答', category: 'control' },
  { char: 'SYN', dec: 22, hex: '0x16', description: '同期信号', category: 'control' },
  { char: 'ETB', dec: 23, hex: '0x17', description: '転送ブロック終了', category: 'control' },
  { char: 'CAN', dec: 24, hex: '0x18', description: '取消', category: 'control' },
  { char: 'EM', dec: 25, hex: '0x19', description: '媒体終端', category: 'control' },
  { char: 'SUB', dec: 26, hex: '0x1A', description: '置換', category: 'control' },
  { char: 'ESC', dec: 27, hex: '0x1B', description: 'エスケープ', category: 'control' },
  { char: 'FS', dec: 28, hex: '0x1C', description: 'ファイル区切り', category: 'control' },
  { char: 'GS', dec: 29, hex: '0x1D', description: 'グループ区切り', category: 'control' },
  { char: 'RS', dec: 30, hex: '0x1E', description: 'レコード区切り', category: 'control' },
  { char: 'US', dec: 31, hex: '0x1F', description: 'ユニット区切り', category: 'control' },

  // 印字可能文字 (32-126)
  { char: ' ', dec: 32, hex: '0x20', description: 'スペース', category: 'printable' },
  { char: '!', dec: 33, hex: '0x21', description: '感嘆符', category: 'printable' },
  { char: '"', dec: 34, hex: '0x22', description: '二重引用符', category: 'printable' },
  { char: '#', dec: 35, hex: '0x23', description: 'シャープ', category: 'printable' },
  { char: '$', dec: 36, hex: '0x24', description: 'ドル記号', category: 'printable' },
  { char: '%', dec: 37, hex: '0x25', description: 'パーセント', category: 'printable' },
  { char: '&', dec: 38, hex: '0x26', description: 'アンパサンド', category: 'printable' },
  { char: "'", dec: 39, hex: '0x27', description: '一重引用符', category: 'printable' },
  { char: '(', dec: 40, hex: '0x28', description: '左括弧', category: 'printable' },
  { char: ')', dec: 41, hex: '0x29', description: '右括弧', category: 'printable' },
  { char: '*', dec: 42, hex: '0x2A', description: 'アスタリスク', category: 'printable' },
  { char: '+', dec: 43, hex: '0x2B', description: 'プラス', category: 'printable' },
  { char: ',', dec: 44, hex: '0x2C', description: 'カンマ', category: 'printable' },
  { char: '-', dec: 45, hex: '0x2D', description: 'ハイフン', category: 'printable' },
  { char: '.', dec: 46, hex: '0x2E', description: 'ピリオド', category: 'printable' },
  { char: '/', dec: 47, hex: '0x2F', description: 'スラッシュ', category: 'printable' },
  
  // 数字 (48-57)
  ...Array.from({ length: 10 }, (_, i) => ({
    char: String(i),
    dec: i + 48,
    hex: `0x${(i + 48).toString(16).toUpperCase().padStart(2, '0')}`,
    description: `数字${i}`,
    category: 'printable' as const
  })),

  // 記号と大文字 (58-64)
  { char: ':', dec: 58, hex: '0x3A', description: 'コロン', category: 'printable' },
  { char: ';', dec: 59, hex: '0x3B', description: 'セミコロン', category: 'printable' },
  { char: '<', dec: 60, hex: '0x3C', description: '小なり', category: 'printable' },
  { char: '=', dec: 61, hex: '0x3D', description: 'イコール', category: 'printable' },
  { char: '>', dec: 62, hex: '0x3E', description: '大なり', category: 'printable' },
  { char: '?', dec: 63, hex: '0x3F', description: '疑問符', category: 'printable' },
  { char: '@', dec: 64, hex: '0x40', description: 'アットマーク', category: 'printable' },

  // 大文字アルファベット (65-90)
  ...Array.from({ length: 26 }, (_, i) => ({
    char: String.fromCharCode(65 + i),
    dec: 65 + i,
    hex: `0x${(65 + i).toString(16).toUpperCase().padStart(2, '0')}`,
    description: `大文字${String.fromCharCode(65 + i)}`,
    category: 'printable' as const
  })),

  // 記号 (91-96)
  { char: '[', dec: 91, hex: '0x5B', description: '左角括弧', category: 'printable' },
  { char: '\\', dec: 92, hex: '0x5C', description: 'バックスラッシュ', category: 'printable' },
  { char: ']', dec: 93, hex: '0x5D', description: '右角括弧', category: 'printable' },
  { char: '^', dec: 94, hex: '0x5E', description: 'キャレット', category: 'printable' },
  { char: '_', dec: 95, hex: '0x5F', description: 'アンダースコア', category: 'printable' },
  { char: '`', dec: 96, hex: '0x60', description: 'バッククォート', category: 'printable' },

  // 小文字アルファベット (97-122)
  ...Array.from({ length: 26 }, (_, i) => ({
    char: String.fromCharCode(97 + i),
    dec: 97 + i,
    hex: `0x${(97 + i).toString(16).toUpperCase().padStart(2, '0')}`,
    description: `小文字${String.fromCharCode(97 + i)}`,
    category: 'printable' as const
  })),

  // 記号 (123-126)
  { char: '{', dec: 123, hex: '0x7B', description: '左波括弧', category: 'printable' },
  { char: '|', dec: 124, hex: '0x7C', description: '縦線', category: 'printable' },
  { char: '}', dec: 125, hex: '0x7D', description: '右波括弧', category: 'printable' },
  { char: '~', dec: 126, hex: '0x7E', description: 'チルダ', category: 'printable' },

  // DEL文字
  { char: 'DEL', dec: 127, hex: '0x7F', description: '削除', category: 'control' },
];