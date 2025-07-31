import type { Article } from "@/types"

// ダミー記事データ
const dummyArticles: Article[] = [
  {
    id: "1",
    title: "Next.js 15とReact Server Componentsの深い理解",
    slug: "nextjs-15-rsc-deep-dive",
    summary:
      "Next.js 15で導入されたReact Server Componentsの概念、利点、そして実践的な使い方について詳しく解説します。",
    content: `
      <p>Next.js 15は、React Server Components (RSC) を中心とした大きな進化を遂げました。RSCは、サーバーサイドでコンポーネントをレンダリングし、その結果をクライアントにストリーミングすることで、初期ロードのパフォーマンスとSEOを劇的に改善します。</p>
      <h2>RSCの利点</h2>
      <ul>
        <li><strong>パフォーマンス向上:</strong> サーバーでデータをフェッチし、HTMLとしてレンダリングするため、クライアントサイドでのJavaScriptのダウンロードと実行が最小限に抑えられます。</li>
        <li><strong>SEOの改善:</strong> クローラーが完全なHTMLコンテンツを容易に取得できます。</li>
        <li><strong>開発体験の向上:</strong> サーバーサイドのロジックとクライアントサイドのUIをシームレスに統合できます。</li>
      </ul>
      <h3>RSCとClient Componentsの使い分け</h3>
      <p>RSCはデフォルトであり、データフェッチや静的なUIのレンダリングに適しています。インタラクティブな要素（ボタンのクリック、フォームの入力など）が必要な場合は、<code>"use client"</code> ディレクティブを使用してClient Componentsを定義します。</p>
      <pre><code>// Server Component (デフォルト)
export default function MyServerComponent() {
  // サーバーサイドでのデータフェッチ
  const data = await fetchData();
  return &lt;div&gt;{data}&lt;/div&gt;;
}

// Client Component
'use client';
import { useState } from 'react';
export default function MyClientComponent() {
  const [count, setCount] = useState(0);
  return &lt;button onClick={() =&gt; setCount(count + 1)}&gt;{count}&lt;/button&gt;;
}</code></pre>
      <p>このアプローチにより、バンドルサイズを最適化し、必要なJavaScriptのみをクライアントに送信することができます。</p>
    `,
    votes: [
      { axis: "有益性", count: 120 },
      { axis: "新規性", count: 85 },
      { axis: "再現性", count: 90 },
      { axis: "網羅性", count: 110 },
    ],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "2",
    title: "TypeScriptにおける高度な型テクニック",
    slug: "typescript-advanced-types",
    summary:
      "TypeScriptの型システムを最大限に活用するための、Mapped Types, Conditional Types, Template Literal Typesなどの高度なテクニックを紹介します。",
    content: `
      <p>TypeScriptは、JavaScriptに静的型付けをもたらし、大規模なアプリケーション開発において堅牢性と保守性を高めます。しかし、その真価は高度な型テクニックを使いこなすことで発揮されます。</p>
      <h2>Mapped Types</h2>
      <p>既存の型から新しい型を生成する際に非常に強力です。例えば、ある型の全てのプロパティをOptionalにする場合など。</p>
      <pre><code>type Optional&lt;T&gt; = {
  [P in keyof T]?: T[P];
};

interface User {
  id: number;
  name: string;
}

type OptionalUser = Optional&lt;User&gt;; // { id?: number; name?: string; }</code></pre>
      <h3>Conditional Types</h3>
      <p>型が特定の条件を満たすかどうかに基づいて異なる型を選択できます。<code>infer</code>キーワードと組み合わせることで、型推論をより柔軟に行えます。</p>
      <pre><code>type ReturnType&lt;T extends (...args: any) =&gt; any&gt; = T extends (...args: any) =&gt; infer R ? R : any;

function greet(): string {
  return "Hello";
}

type GreetReturnType = ReturnType&lt;typeof greet&gt;; // string</code></pre>
      <p>これらのテクニックを習得することで、より表現力豊かで安全なコードを書くことができるようになります。</p>
    `,
    votes: [
      { axis: "有益性", count: 95 },
      { axis: "新規性", count: 70 },
      { axis: "再現性", count: 100 },
      { axis: "深掘り", count: 115 },
    ],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "3",
    title: "WebAssemblyとRustで高速なWebアプリケーションを構築する",
    slug: "webassembly-rust-web-app",
    summary:
      "WebAssembly (Wasm) とRustを組み合わせて、ブラウザでネイティブに近いパフォーマンスを実現する方法を探ります。",
    content: `
      <p>WebAssemblyは、Webブラウザで高性能なコードを実行するためのバイナリ命令フォーマットです。Rustのような言語で書かれたコードをWasmにコンパイルすることで、JavaScriptでは達成が難しい計算集約的なタスクをブラウザ上で高速に実行できます。</p>
      <h2>なぜWasmとRustか？</h2>
      <ul>
        <li><strong>パフォーマンス:</strong> WasmはJavaScriptよりも高速に実行されるように設計されています。</li>
        <li><strong>安全性:</strong> Rustはメモリ安全性を保証する言語であり、Wasmモジュールをより安全に開発できます。</li>
        <li><strong>エコシステム:</strong> RustにはWasm開発をサポートする豊富なツールとライブラリがあります。</li>
      </ul>
      <h3>実践的な例</h3>
      <p>例えば、画像処理、ゲームエンジン、科学計算など、CPU負荷の高い処理をWasmで実装することで、Webアプリケーションのユーザー体験を大幅に向上させることが可能です。</p>
      <pre><code>// Rustの簡単な例 (Wasmにコンパイルされる)
#[no_mangle]
pub extern "C" fn add(a: i32, b: i32) -> i32 {
    a + b
}</code></pre>
      <p>この技術はまだ発展途上ですが、Webの未来を形作る重要な要素となるでしょう。</p>
    `,
    votes: [
      { axis: "有益性", count: 80 },
      { axis: "新規性", count: 110 },
      { axis: "再現性", count: 60 },
      { axis: "将来性", count: 130 },
    ],
    image: "/placeholder.svg?height=200&width=400",
  },
]

/**
 * 全ての記事を取得する関数（ダミー）
 * 実際のアプリケーションでは、データベースや外部APIからデータをフェッチします。
 * 非同期処理をシミュレートするためにPromiseを返します。
 */
export async function getAllArticles(): Promise<Article[]> {
  // 実際のデータフェッチをシミュレートするために遅延を設ける
  await new Promise((resolve) => setTimeout(resolve, 500))
  return dummyArticles
}

/**
 * スラッグに基づいて単一の記事を取得する関数（ダミー）
 * 実際のアプリケーションでは、データベースクエリなどを行います。
 * 非同期処理をシミュレートするためにPromiseを返します。
 */
export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  // 実際のデータフェッチをシミュレートするために遅延を設ける
  await new Promise((resolve) => setTimeout(resolve, 300))
  return dummyArticles.find((article) => article.slug === slug)
}
