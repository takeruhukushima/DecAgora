/**
 * 投票軸とそのカウントを表す型
 */
export interface Vote {
  axis: string // 投票の軸（例: '有益性', '新規性'）
  count: number // その軸での投票数
}

/**
 * 記事の構造を表す型
 */
export interface Article {
  id: string // 記事の一意なID
  title: string // 記事のタイトル
  slug: string // 記事のURLスラッグ（例: 'nextjs-15-rsc-deep-dive'）
  summary: string // 記事の概要
  content: string // 記事のHTMLコンテンツ
  votes: Vote[] // 記事に対する多角的な評価（投票）
  image?: string // 記事のサムネイル画像URL (オプション)
}
