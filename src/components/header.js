import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#4caf50',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0, fontWeight: 600 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <p style={{
        margin: '4px 0 0 0',
        color: 'white'
      }}>
        当サイトは技術書典5の<a href="https://techbookfest.org/event/tbf05/circle">サークルリスト</a>から頒布物情報をまとめた非公式サイトです。 <br/>
        問い合わせは<a href="https://twitter.com/mottox2">@mottox2</a>まで。
      </p>
    </div>
  </div>
)

export default Header
