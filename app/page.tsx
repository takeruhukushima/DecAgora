import { getAllArticles } from "@/lib/data" // サーバーサイドでデータをフェッチ
import { ArticleCard } from "@/components/ArticleCard" // Server Componentをインポート

/**
 * ホームページコンポーネント
 * 全ての記事のリストを表示します。
 * このコンポーネントはServer Componentとして動作し、サーバーサイドで記事データをフェッチします。
 * これにより、初期ロード時のパフォーマンスが向上し、SEOにも有利です。
 */
export default async function HomePage() {
  const articles = await getAllArticles() // サーバーサイドで記事データを取得

  return (
    <section className="py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">最新の記事</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          // ArticleCardはServer Componentであり、記事のサマリーを表示します。
          // 記事詳細ページへのリンクも含まれます。
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  )
}
