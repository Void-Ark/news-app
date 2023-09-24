import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  articles = [
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Kara Scannell",
            "title": "Hunter Biden tells court he plans to plead not guilty to gun charges - CNN",
            "description": "President Joe Biden’s son, Hunter Biden, plans to plead not guilty to federal gun charges, he said in a court filing Tuesday.",
            "url": "https://www.cnn.com/2023/09/19/politics/hunter-biden-not-guilty/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230914134624-08-hunter-biden-072623.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-09-19T21:15:00Z",
            "content": "President Joe Bidens son, Hunter Biden, plans to plead not guilty to federal gun charges, he said in a court filing Tuesday.\r\nHe is also asking for his initial court appearance to be held remotely.\r\n… [+2106 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Tracy Wright",
            "title": "Danny Masterson's wife Bijou Phillips files for divorce - Fox News",
            "description": "Danny Masterson's wife, Bijou Phillips, filed for divorce Monday on the legal grounds of \"irreconcilable differences\" following 11 years of marriage.",
            "url": "https://www.foxnews.com/entertainment/danny-mastersons-wife-bijou-phillips-files-divorce",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/09/danny-masterson-bijou-phillips-divorce.jpg",
            "publishedAt": "2023-09-19T21:10:00Z",
            "content": "Bijou Phillips filed for divorce from Danny Masterson on Monday.\r\nPhillips, 43, cited \"irreconcilable differences\" in court documents obtained by Fox News Digital.\r\nThe couple married in 2011 and hav… [+3672 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "",
            "title": "Nick Chubb out for season: Browns RB options as Kareem Hunt visits, Jerome Ford to be 'featured back' - CBS Sports",
            "description": "A look at Cleveland's top options to replace Chubb, who suffered a knee injury Monday night",
            "url": "https://www.cbssports.com/nfl/news/nick-chubb-out-for-season-browns-rb-options-as-kareem-hunt-visits-jerome-ford-to-be-featured-back/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/09/19/cf1b1b29-f003-45ab-bce4-cfb220a105c4/thumbnail/1200x675/124525514897b3e5391bc3cb178f0304/chubb-g.jpg",
            "publishedAt": "2023-09-19T21:09:00Z",
            "content": "Not only did the Cleveland Browns suffer their first defeat of the season Monday night, but they also lost the heart and soul of their offense. During the second quarter of a 26-22 loss to the Pittsb… [+4139 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "David Shortell",
            "title": "Zelensky urges unity in dramatic UN address - CNN",
            "description": "Ukrainian President Volodymyr Zelensky urged a global front against Russian aggression in a dramatic speech delivered Tuesday during the UN General Assembly – his first in-person address to the global body since Russia’s 2022 invasion.",
            "url": "https://www.cnn.com/2023/09/19/europe/zelensky-unga-2023-intl-latam/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230919141354-01-unga-091923-zelensky.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-09-19T20:52:00Z",
            "content": "Ukrainian President Volodymyr Zelensky urged a global front against Russian aggression in a dramatic speech delivered Tuesday during the UN General Assembly his first in-person address to the global … [+1904 chars]"
        },
        {
            "source": {
                "id": "ign",
                "name": "IGN"
            },
            "author": "Alex Stedman",
            "title": "Xbox's Phil Spencer Acknowledges Massive Court Document Leak: 'So Much Has Changed' - IGN",
            "description": "Xbox head Phil Spencer has acknowledged today's massive court document leak, saying it's \"hard to see our team's work shared in this way because so much has changed.\"",
            "url": "https://www.ign.com/articles/xboxs-phil-spencer-acknowledges-massive-court-document-leak-so-much-has-changed",
            "urlToImage": "https://assets-prd.ignimgs.com/2023/09/19/spencer-1695156371553.jpg?width=1280",
            "publishedAt": "2023-09-19T20:48:34Z",
            "content": "Xbox head Phil Spencer has weighed in on the massive leak of documents from June's Microsoft vs. FTC trial, which accidentally exposed tons of plans for both Xbox's hardware future and slate of games… [+2822 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Wayne Sterling, Zoe Sottile",
            "title": "Michigan State University announces plans to fire Mel Tucker amid sexual harassment allegations - CNN",
            "description": "Michigan State University intends to fire head football coach Mel Tucker after the coach was accused of sexual harassment, the university announced Monday.",
            "url": "https://www.cnn.com/2023/09/19/football/mel-tucker-michigan-state-fired/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230918190155-mel-tucker-michigan-state-fired.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-09-19T20:39:00Z",
            "content": "Michigan State University intends to fire head football coach Mel Tucker after the coach was accused of sexual harassment, the university announced Monday.\r\nI, with the support of administration and … [+4965 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Katie Hunt",
            "title": "Scientists recover RNA from an extinct species for the first time - CNN",
            "description": "Geneticists have for the first time isolated and decoded RNA molecules from a creature that died out long ago.",
            "url": "https://www.cnn.com/2023/09/19/world/scientists-recover-rna-tasmanian-tiger-thylacine-scn/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230919113109-rna-tasmanian-tiger.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-09-19T20:37:00Z",
            "content": "Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nGeneticists have for the first time isolated and decod… [+3805 chars]"
        },
        {
            "source": {
                "id": "politico",
                "name": "Politico"
            },
            "author": null,
            "title": "Hardliners block defense spending bill as GOP civil war worsens - POLITICO",
            "description": "The failed vote is a major blow to Speaker Kevin McCarthy and hawks who had hoped to advance the spending bill.",
            "url": "https://www.politico.com/news/2023/09/19/gop-block-defense-spending-bill-00116810",
            "urlToImage": "https://static.politico.com/69/80/29d60173418993eb185ad346b353/congress-dea-94807.jpg",
            "publishedAt": "2023-09-19T20:14:10Z",
            "content": "Ultimately the procedural vote on the $826 billion defense spending bill, known as a rule, failed in a 212-214 vote on Tuesday. Five Republicans defected on the procedural vote, which almost always f… [+2957 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Rishi Sunak considers weakening key green policies - BBC",
            "description": "Plans could include delaying a ban on sales of new petrol cars and the phasing out of gas boilers.",
            "url": "https://www.bbc.com/news/uk-politics-66857551",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/FD91/production/_131131946_sunak_getty.jpg",
            "publishedAt": "2023-09-19T20:10:43Z",
            "content": "Rishi Sunak is considering weakening some of the government's key green commitments in a major policy shift.\r\nIt could include delaying a ban on the sales of new petrol and diesel cars and phasing ou… [+5165 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Joey Garrison",
            "title": "Why UAW strike support is a political no-brainer for Biden before 2024 - USA TODAY",
            "description": "President Joe Biden emphatically put his support behind UAW's demands amid its strike. Ahead of the 2024 election, he didn't really have a choice.",
            "url": "https://www.usatoday.com/story/news/politics/2023/09/19/biden-supporting-uaw-strike-2024-election-effect/70892207007/",
            "urlToImage": "https://www.usatoday.com/gcdn/presto/2023/09/19/USAT/6f6485e8-a379-42c5-8d3d-0601f82d2fe4-AP_Auto_Workers-Strike.jpg?crop=6950,3910,x0,y247&width=3200&height=1801&format=pjpg&auto=webp",
            "publishedAt": "2023-09-19T19:31:45Z",
            "content": "WASHINGTON President Joe Biden had just landed in Philadelphia, where he would later hail the virtues of unions in a speech on Labor Day, when he downplayed the possibility autoworkers could strike a… [+8138 chars]"
        },
        {
            "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
            },
            "author": "Jess Bravin",
            "title": "Russia, Ukraine Clash Over Genocide Charges at World Court - The Wall Street Journal",
            "description": "International Court of Justice hears arguments on whether Russia’s invasion can be challenged under 1948 treaty",
            "url": "https://www.wsj.com/world/russia/russia-ukraine-clash-over-genocide-charges-at-world-court-c386b34c",
            "urlToImage": "https://images.wsj.net/im-854247/social",
            "publishedAt": "2023-09-19T18:59:00Z",
            "content": null
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Tracy Wright, Adam Sabes",
            "title": "Vanna White extends ‘Wheel of Fortune' contract as co-host through 2025-26 season - Fox News",
            "description": "Vanna White signed two-year contract extension to co-host “Wheel of Fortune\" through 2026 season as Ryan Seacrest prepares to take over for Pat Sajak in 2024.",
            "url": "https://www.foxnews.com/entertainment/vanna-white-extends-wheel-fortune-contract-co-host-season",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/12/GettyImages-1244293973.jpg",
            "publishedAt": "2023-09-19T18:58:00Z",
            "content": "Vanna White extended her contract with \"Wheel of Fortune\" for two years as longtime host Pat Sajak prepares to leave in 2024.\r\nWhite signed a two-year contract extension as co-host of the popular gam… [+3072 chars]"
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "Ellie Kaufman",
            "title": "New details in F-35 'mishap' as mystery remains about how jet was lost - ABC News",
            "description": "The overall recovery process has begun, an official told ABC News.",
            "url": "https://abcnews.go.com/Politics/new-details-f35-mishap-questions-remain-jet-lost/story?id=103313514",
            "urlToImage": "https://i.abcnewsfe.com/a/41d27793-a7e2-40b3-aeb6-9cbe4321a542/aircraft-file-gty-ml-230919_1695131890416_hpMain_16x9.jpg?w=992",
            "publishedAt": "2023-09-19T18:28:48Z",
            "content": "The debris field found outside Charleston, South Carolina, on Monday is confirmed to be the remains of an F-35 that went missing on Sunday after a reported \"mishap\" or \"malfunction\" in which the jet'… [+2922 chars]"
        },
        {
            "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
            },
            "author": "Alexander Osipovich, Candice Choi, Dean Seal, David Marino-Nachison, Hannah Miao, Corrie Driebusch, Margot Patrick, Sam Goldfarb, Angus Berwick, Eric Wallerstein, Chelsey Dulaney, Gunjan Banerji, Rebecca Feng, Heard Editors",
            "title": "FTX Sues Sam Bankman-Fried's Parents to Recover 'Misappropriated Funds' - The Wall Street Journal",
            "description": "Live coverage of what's moving stocks and other markets, including the Dow Jones Industrial Average, S&P 500 and Nasdaq Composite",
            "url": "https://www.wsj.com/livecoverage/stock-market-today-dow-jones-09-19-2023",
            "urlToImage": "https://images.wsj.net/im-785590/social",
            "publishedAt": "2023-09-19T18:23:00Z",
            "content": "Stocks slid Tuesday while bond yields climbed to their highest levels since 2007 as the Federal Reserve's two-day September meeting got going.\r\nShares of Amazon.com, one of the biggest stocks in the … [+1702 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Pff.com"
            },
            "author": "Nathan Jahnke",
            "title": "Rest of season fantasy football rankings following NFL Week 2 | Fantasy Football News, Rankings and Projections - Pro Football Focus",
            "description": "These rest-of-season fantasy football rankings will help when it comes to deciding who to add, who to cut or who might be worth trading for. These will be updated every Tuesday throughout the season to help you before having to make any waiver wire decisions.",
            "url": "https://www.pff.com/news/fantasy-football-rest-of-season-rankings-following-nfl-week-2-2023",
            "urlToImage": "https://media.pff.com/2023/09/2RWE1N1-scaled.jpg?w=956&h=538",
            "publishedAt": "2023-09-19T17:59:04Z",
            "content": "Two Rams Skyrocket: Both Kyren Williams and Puka Nacua followed up a great Week 1 with an even stronger Week 2, moving them up the rankings.\r\nJerome Ford joins the top-20 running backs: After Nick Ch… [+583 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Chris Welch",
            "title": "Your iPhone can now restore your Apple TV if the streaming box has problems - The Verge",
            "description": "Apple is making its Apple TV set-top box easier to service. A new feature lets iPhone owners restore the device in the event that it needs a reset due to software bugs.",
            "url": "https://www.theverge.com/2023/9/19/23880671/apple-tv-4k-hd-iphone-restore-recovery",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/eUkBiLsG7jUTkwzTxKgG7lvSb3c=/0x0:1215x781/1200x628/filters:focal(608x391:609x392)/cdn.vox-cdn.com/uploads/chorus_asset/file/24934855/tvrestore.jpg",
            "publishedAt": "2023-09-19T17:33:27Z",
            "content": "Your iPhone can now restore your Apple TV if the streaming box has problems\r\nYour iPhone can now restore your Apple TV if the streaming box has problems\r\n / No more having to rely on Apple support wh… [+1780 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Five Americans freed in Iran prisoner swap land in US - BBC",
            "description": "The four men and one woman return to the US after $6bn of frozen Iranian funds were released.",
            "url": "https://www.bbc.com/news/world-us-canada-66850811",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/11FD2/production/_131128637_e6ee4a28170caa44ebd2db38cccf2079583078910_0_1731_11541000x667.jpg",
            "publishedAt": "2023-09-19T17:19:15Z",
            "content": "A plane carrying five Americans jailed in Iran for years has landed in the US after a controversial prisoner swap.\r\nThey touched down in Fort Belvoir, Virginia, just south of Washington DC on Tuesday… [+4258 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "David Ljunggren, Steve Scherer",
            "title": "Canada's Trudeau: not trying to provoke India, but wants answers over murder - Reuters",
            "description": "Canada is not trying to provoke India by suggesting it was linked to the murder of a Sikh separatist leader, but wants New Delhi to address the issue properly, Prime Minister Justin Trudeau said on Tuesday.",
            "url": "https://www.reuters.com/world/canada-pm-not-trying-provoke-india-want-answers-over-murder-2023-09-19/",
            "urlToImage": "https://www.reuters.com/resizer/YySP3QGz78TGILxvFXZzqHMxBxo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/HD4BMMVVDRPRVGABTBP5Y4OLYU.jpg",
            "publishedAt": "2023-09-19T17:06:00Z",
            "content": "OTTAWA, Sept 19 (Reuters) - Canada is not trying to provoke India by suggesting it was linked to the murder of a Sikh separatist leader, but wants New Delhi to address the issue properly, Prime Minis… [+4346 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
        }
    ]

    constructor(){
        super();
        this.state = {articles: this.articles};
    }
  render() {
    return (
      <div className='container my-3'>
        <NewsItem 
        author= "Jeff Stein"
        title= "Michigan Democrats urge Biden to beat Trump to UAW picket line - The Washington Post"
        description= "The strike has posed a political puzzle for the president, who must figure out how far to go to stand with the UAW workers."
        url= "https://www.washingtonpost.com/business/2023/09/18/biden-uaw-strike-picket-line/"
        urlToImage= "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/M3G2YE5SADW2TFLY7HAWYIMAUM_size-normalized.jpg&w=1440"
        publishedAt= "2023-09-19T00:24:34Z"
        />
        <NewsItem 
        author= "Jeff Stein"
        title= "Michigan Democrats urge Biden to beat Trump to UAW picket line - The Washington Post"
        description= "The strike has posed a political puzzle for the president, who must figure out how far to go to stand with the UAW workers."
        url= "https://www.washingtonpost.com/business/2023/09/18/biden-uaw-strike-picket-line/"
        urlToImage= "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/M3G2YE5SADW2TFLY7HAWYIMAUM_size-normalized.jpg&w=1440"
        publishedAt= "2023-09-19T00:24:34Z"
        />
        <NewsItem 
        author= "Jeff Stein"
        title= "Michigan Democrats urge Biden to beat Trump to UAW picket line - The Washington Post"
        description= "The strike has posed a political puzzle for the president, who must figure out how far to go to stand with the UAW workers."
        url= "https://www.washingtonpost.com/business/2023/09/18/biden-uaw-strike-picket-line/"
        urlToImage= "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/M3G2YE5SADW2TFLY7HAWYIMAUM_size-normalized.jpg&w=1440"
        publishedAt= "2023-09-19T00:24:34Z"
        />
        <NewsItem 
        author= "Jeff Stein"
        title= "Michigan Democrats urge Biden to beat Trump to UAW picket line - The Washington Post"
        description= "The strike has posed a political puzzle for the president, who must figure out how far to go to stand with the UAW workers."
        url= "https://www.washingtonpost.com/business/2023/09/18/biden-uaw-strike-picket-line/"
        urlToImage= "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/M3G2YE5SADW2TFLY7HAWYIMAUM_size-normalized.jpg&w=1440"
        publishedAt= "2023-09-19T00:24:34Z"
        />

      </div>
    )
  }
}
