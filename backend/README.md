# API Endpoints

The [GraphQL schema](/backend/src/graphql/schema.graphql) provides a way to manage user profiles on the blockchain, including querying and updating their details.

It defined a structure for managing user information in a decentralized application. It includes the `User` type, which represents a user and their associated details, as well as the queries and mutations for retrieving and updating user data.

## Types

### `User`

The `User` type represents a user in the system. It includes both required and optional fields that describe the user's identity, registration details, and additional profile information.

| Field             | Type      | Description                                                                               |
| ----------------- | --------- | ----------------------------------------------------------------------------------------- |
| `name`            | `String!` | The unique name of the user. This field is required.                                      |
| `user_address`    | `String!` | The blockchain address associated with the user. This field is required.                  |
| `token_id`        | `Int!`    | The unique token ID assigned to the user. This field is required.                         |
| `registration_tx` | `String!` | The transaction hash of the user's registration. This field is required.                  |
| `block_number`    | `Int!`    | The block number where the registration transaction was included. This field is required. |
| `timestamp`       | `String!` | The timestamp of when the user was registered. This field is required.                    |
| `display_name`    | `String`  | The display name of the user, which can be different from the registered name.            |
| `bio`             | `String`  | A short biography or description of the user.                                             |
| `profession`      | `String`  | The user's profession or occupation.                                                      |

## Queries

### `users`

The `users` query retrieves a list of all users in the system.

**Response:**

- Returns an array of `User` objects.

```graphql
query {
  users {
    name
    user_address
    token_id
    registration_tx
    block_number
    timestamp
    display_name
    bio
    profession
  }
}
```

### `user`

The `user` query retrieves a single user based on their blockchain address.

**Arguments:**

- `address` (String!): The blockchain address of the user.

**Response:**

- Returns a `User` object if the user is found, otherwise `null`.

```graphql
query {
  user(address: "0x1234567890abcdef") {
    name
    user_address
    token_id
    registration_tx
    block_number
    timestamp
    display_name
    bio
    profession
  }
}
```

### `user_by_name`

The `user_by_name` query retrieves a single user based on their unique name.

**Arguments:**

- `name` (String!): The name of the user.

**Response:**

- Returns a `User` object if the user is found, otherwise `null`.

```graphql
query {
  user_by_name(name: "JohnDoe") {
    name
    user_address
    token_id
    registration_tx
    block_number
    timestamp
    display_name
    bio
    profession
  }
}
```

## Mutations

### `update_user`

The `update_user` mutation allows updating a user's profile information, such as their display name, bio, and profession.

**Arguments:**

- `address` (String!): The blockchain address of the user to update.
- `display_name` (String, optional): The new display name of the user.
- `bio` (String, optional): The new bio for the user.
- `profession` (String, optional): The new profession of the user.

**Response:**

- Returns the updated `User` object.

```graphql
mutation {
  update_user(
    address: "0x1234567890abcdef"
    display_name: "Jane Doe"
    bio: "Blockchain enthusiast and developer"
    profession: "Software Engineer"
  ) {
    name
    user_address
    token_id
    registration_tx
    block_number
    timestamp
    display_name
    bio
    profession
  }
}
```

---

## Example Usage

### Query: Get All Users

```graphql
query {
  users {
    name
    user_address
    display_name
    profession
  }
}
```

### Query: Get User by Address

```graphql
query {
  user(address: "0x1234567890abcdef") {
    name
    user_address
    display_name
    bio
  }
}
```

### Mutation: Update User Profile

```graphql
mutation {
  update_user(
    address: "0x1234567890abcdef"
    display_name: "Alice"
    bio: "Blockchain developer"
    profession: "Developer"
  ) {
    name
    display_name
    bio
    profession
  }
}
```
