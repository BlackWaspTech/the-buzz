# The Buzz

Take a look at a live, full-stack application showcasing wasp-graphql.

**[The Buzz]() is a social media application that uses both [`wasp-graphql`](https://github.com/BlackWaspTech/wasp-graphql) and [`redux-wasp`](https://github.com/BlackWaspTech/redux-wasp)**

**For an additional feature unique to [`Redux`](https://redux.js.org/) while using [`GraphQL`](https://graphql.org/) with [`Apollo Client v2.0`](https://www.apollographql.com/client), check out [`redux-wasp-apollo`](https://github.com/BlackWaspTech/redux-wasp-apollo)**

## Showcasing Wasp-Graphql

First things first, require Wasp-GraphQL:

`import { query } from 'wasp-graphql';`

One of our example strings:

```
let findUser = `query findUser($username: String!){
  user(userName: $username) {
    id
    username
    biography
    password
    address
  }
}`;
```

We set up our endpoint and init:

```
const API = 'http://localhost:8080/graphql';

const init = {
  body: JSON.stringify({
    query: queries.findUser,
    variables: vars
  })
};
```

Then used Wasp-GraphQL:

```
query(API, init)
  .then(res => {
    return res.json();
  })
  .then(resp => {
    store.dispatch(types.updateUser(resp));
  });
```

## Showcasing Redux-wasp

We incorporated `wasp-graphql` into `redux-wasp`

```
componentDidMount() {
  if (this.props.cookies.cookies.loggedIn) {
    const vars = {
      username: this.props.cookies.cookies.loggedIn
    };
  const init = {
    body: JSON.stringify({
      query: queries.findUser,
      variables: vars
    })
  };

  query(API, init)
    .then(res => {
      return res.json();
    })
    .then(resp => {
      store.dispatch(types.updateUser(resp));
    });
  }
}
```

---

## Changelog

View it [here](CHANGELOG.md)

## Contributing

[Read more](CONTRIBUTING.md)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/10323609?v=4" width="100px;"/><br /><sub><b>Denny Temple</b></sub>](https://dentemple.com/)<br /> | [<img src="https://avatars2.githubusercontent.com/u/19364468?v=4" width="100px;"/><br /><sub><b>Reynolds A Colon</b></sub>](http://www.realized-technologies.com)<br /> | [<img src="https://avatars2.githubusercontent.com/u/23730068?v=4" width="100px;"/><br /><sub><b>kamo31</b></sub>](https://github.com/kamo31)<br /> | [<img src="https://avatars2.githubusercontent.com/u/19240166?v=4" width="100px;"/><br /><sub><b>marceca</b></sub>](https://github.com/marceca)<br /> |
| :---: | :---: | :---: | :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## Code of Conduct

Read our Code of Conduct [here](CODE-OF-CONDUCT.md).

## License

Free and Open Source under the [MIT License](LICENSE).
