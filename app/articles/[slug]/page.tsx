import { getArticleBySlug } from "@/lib/data" // サーバーサイドでデータをフェッチ
import { VoteWidget } from "@/components/VoteWidget" // Client Componentをインポート
import { notFound } from "next/navigation"

interface ArticleDetailPageProps {
  params: {
    slug: string
  }
}

/**
 * 記事詳細ページコンポーネント
 * 動的ルーティング ([slug]) を利用して、特定のスラッグに対応する記事を表示します。
 * このコンポーネントはServer Componentとして動作し、サーバーサイドで記事データをフェッチします。
 */
export default async function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const article = await getArticleBySlug(params.slug) // スラッグに基づいて記事データを取得

  // 記事が見つからない場合は404ページを表示
  if (!article) {
    notFound()
  }

  return (
    <article className="max-w-3xl mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <div className="text-gray-600 text-sm mb-6">公開日: {new Date().toLocaleDateString()}</div>
      <div className="prose prose-lg max-w-none mb-8">
        {/* 記事のコンテンツをHTMLとしてレンダリング */}
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </div>

      {/* VoteWidgetはClient Componentであり、インタラクティブな投票機能を提供します。
          Server ComponentからClient Componentへは、Propsを通じて初期データを渡します。 */}
      <VoteWidget initialVotes={article.votes} />
    </article>
  )
}
