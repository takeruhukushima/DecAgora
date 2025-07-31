import Link from "next/link"

/**
 * ヘッダーコンポーネント
 * アプリケーションのナビゲーションバーを提供します。
 * これはServer Componentとして設計されており、静的なコンテンツを表示し、
 * クライアントサイドのインタラクティブ性は持ちません。
 */
export function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* アプリケーションのロゴとホームへのリンク */}
        <Link href="/" className="text-2xl font-bold hover:text-gray-300 transition-colors">
          DevAgora
        </Link>
        {/* ナビゲーションリンク */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-gray-300 transition-colors">
                ホーム
              </Link>
            </li>
            <li>
              <Link href="/proposals" className="hover:text-gray-300 transition-colors">
                提案
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-300 transition-colors">
                DevAgoraについて
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
