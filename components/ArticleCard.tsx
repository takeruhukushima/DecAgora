import Link from "next/link"
import Image from "next/image"
import type { Article } from "@/types"

interface ArticleCardProps {
  article: Article
}

/**
 * 記事カードコンポーネント
 * ホームページで各記事のサマリーを表示するために使用されます。
 * これはServer Componentとして設計されており、記事データをPropsとして受け取り、
 * 静的にレンダリングします。
 */
export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={`/articles/${article.slug}`}>
        {/* 記事のサムネイル画像 */}
        <Image
          src={article.image || "/placeholder.svg?height=200&width=400&query=abstract pattern for article thumbnail"}
          alt={article.title}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          {/* 記事のタイトル */}
          <h2 className="text-xl font-semibold mb-2 line-clamp-2">{article.title}</h2>
          {/* 記事の概要 */}
          <p className="text-gray-700 text-sm mb-4 line-clamp-3">{article.summary}</p>
          {/* 記事詳細へのリンク */}
          <span className="text-blue-600 hover:underline text-sm font-medium">続きを読む</span>
        </div>
      </Link>
    </div>
  )
}
