import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/Header" // Server Componentをインポート

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DevAgora",
  description: "開発者向けの民主主義的な知識共有プラットフォーム",
    generator: 'v0.dev'
}

/**
 * ルートレイアウトコンポーネント
 * Next.jsのApp Routerにおけるアプリケーションの基本構造を定義します。
 * ここで定義された内容は、全てのページに適用されます。
 * デフォルトでServer Componentとして動作します。
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {/* HeaderはServer Componentとして、アプリケーション全体で共通のナビゲーションを提供します。 */}
        <Header />
        {/* メインコンテンツエリア。各ページのコンテンツがここにレンダリングされます。 */}
        <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
        {/* フッターはシンプルなServer Componentとして実装します。 */}
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>&copy; {new Date().getFullYear()} DevAgora. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
