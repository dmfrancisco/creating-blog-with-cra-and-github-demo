import React, { Component } from "react";

const headers = { Accept: "application/vnd.github.v3.html+json" };

class Comments extends Component {
  state = {
    comments: [],
  };

  fetchGistComments(id) {
    return fetch(`https://api.github.com/gists/${id}/comments`, {
      headers,
    }).then(response => response.json());
  }

  componentDidMount() {
    this.fetchGistComments(this.props.gist).then(comments =>
      this.setState({ comments })
    );
  }

  render() {
    const { comments } = this.state;

    if (comments.length === 0) {
      return null;
    }

    return (
      <section>
        <h2>Comments</h2>

        {comments.map(comment => (
          <div key={comment.id}>
            <div>
              <img
                src={`${comment.user.avatar_url}&size=40`}
                alt={`${comment.user.login} avatar`}
                width={20}
              />{" "}
              <a href={comment.user.html_url}>{comment.user.login}</a>{" "}
              <em>{comment.author_association === "OWNER" && "Author"}</em>
            </div>
            <div
              className="markdown-body"
              dangerouslySetInnerHTML={{ __html: comment.body_html }}
            />
          </div>
        ))}
      </section>
    );
  }
}

export default Comments;
