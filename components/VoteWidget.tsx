"use client" // このディレクティブにより、このコンポーネントはClient Componentとしてレンダリングされます。

import { useState } from "react"
import type { Vote } from "@/types"
import { Button } from "@/components/ui/button" // shadcn/uiのButtonコンポーネントをインポート

interface VoteWidgetProps {
  initialVotes: Vote[]
}

/**
 * 投票ウィジェットコンポーネント
 * 記事に対する多角的な評価（投票）機能を提供します。
 * 投票数の状態を管理するため、Client Componentとして実装されています。
 * 実際の投票データの永続化は、今後のステップでAPI RouteやServer Actionを通じて行われます。
 */
export function VoteWidget({ initialVotes }: VoteWidgetProps) {
  // 投票の状態を管理するためのuseStateフック
  const [votes, setVotes] = useState<Vote[]>(initialVotes)

  /**
   * 投票ボタンがクリックされたときのハンドラ
   * 特定の投票軸のカウントをインクリメントします。
   * 現時点ではクライアントサイドの状態のみを更新します。
   */
  const handleVote = (axis: string) => {
    setVotes((prevVotes) => prevVotes.map((vote) => (vote.axis === axis ? { ...vote, count: vote.count + 1 } : vote)))
    // TODO: ここでサーバーサイドへの投票データ送信ロジック（API RouteやServer Action）を実装
    console.log(`Voted for: ${axis}`)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">記事を評価する</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {votes.map((vote) => (
          <div key={vote.axis} className="flex items-center justify-between border p-3 rounded-md">
            <span className="font-medium">{vote.axis}</span>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold">{vote.count}</span>
              {/* shadcn/uiのButtonコンポーネントを使用 */}
              <Button onClick={() => handleVote(vote.axis)} size="sm">
                投票
              </Button>
            </div>
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-500 mt-4">
        {"投票はリアルタイムで反映されますが、永続化はされません（デモ用）。"}
      </p>
    </div>
  )
}
