import {RichText} from "prismic-dom";


interface Post extends Array<any>{
    uid: string,
    data: {
        title: string,
        banner: {
            url: string,
        },
        content:any
    }
    last_publication_date:string
  }

  
export function getPosts(results: any ) {

    const Posts = results.map((post: Post ) => {
    return {
        id: post.uid,
        title: RichText.asText(post.data.title),
        banner: post.data.banner.url,
        content: post.data.content.find((content: { type: string }) => content.type === 'paragraph')?.text ?? '',
        updateAt: new Date(post.last_publication_date as string).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        })
    }
})
    return Posts
}
