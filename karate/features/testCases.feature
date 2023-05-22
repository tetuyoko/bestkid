Feature: Test Hasura Blog Engine GraphQL API

  Background:
    # GraphQL API Endpoint
    * url 'http://graphql-engine:8080/v1/graphql'

  Scenario: TestSimpleQuery
    * text query =
      """
        query {
          subdivisions {
            display_order
            name
            code
          }
        }
      """
    Given request { query: '#(query)' }
    When method post
    Then status 200
    And print 'response:', response
    And match response == "#object"
    And match response.errors == '#notpresent'

    #Scenario: TestSimpleQuery
    #  * text query =
    #    """
    #      query {
    #        cms_post {
    #          id
    #          author_id
    #          user {
    #            id
    #            email
    #          }
    #        }
    #      }
    #    """
    #  Given request { query: '#(query)' }
    #  When method post
    #  Then status 200
    #  And print 'response:', response
    #  And match response == "#object"
    #  And match response.errors == '#notpresent'

    #Scenario: Test query getPosts
    #    * text query =
    #    """
    #    query getPosts($author_id: Int, $status: String) {
    #      cms_post(where: {author_id: {_eq: $author_id}, status: {_eq: $status}}) {
    #        id
    #        title
    #        content
    #        status
    #        created_at
    #        author_id
    #        user {
    #          username
    #          role
    #        }
    #      }
    #    }
    #    """

    #    * def variables =
    #    """
    #      {
    #        "author_id": 1,
    #        "status": "published"
    #      }
    #    """
    #    And request { query: '#(query)', operationName: "getPosts", variables: '#(variables)' }
    #    When method post
    #    Then status 200
    #    And print 'response:', response
    #    And match response == "#object"
    #    And match response.errors == '#notpresent'
    #    And assert response.data.cms_post.length >= 1

    #Scenario: Readers: Cannot View Drafts
    #    Given def query = read('getPosts.gql')
    #    And request { query: '#(query)' }
    #    When method post
    #    * status 200 * print 'response:', response
    #    * match response == "#object"
    #    * match response.errors == '#notpresent'
    #    # Going to look for status:draft key value in the post response using Karate match syntax
    #    * def postList = response.data.cms_post
    #    * match postList !contains { status : "draft" }
    #
    #Scenario: Editor User: Can View Drafts
    #    Given def query = read('getPosts.gql')
    #    # Creating a variable and adding to draft
    #    And def variables = { status: 'draft' }
    #    And request { query: '#(query)', variables: '#(variables)' }
    #    # Emulating an editor using `x-hasura-admin-secret`
    #    And header x-hasura-admin-secret = 'admin_secret_for_testing'
    #    And header x-hasura-role = 'editor'
    #    When method post
    #    * status 200
    #    * print 'response:', response
    #    * match response == "#object"
    #    * match response.errors == '#notpresent'
    #    * def postCount = (response.data.cms_post.length)
    #    * assert postCount >= 1
    #
    #Scenario: Authors: Can Create Posts
    #    Given def query = read('createPost.gql')
    #    And def variables = { title: 'karate_test', content: 'This is a test post for my Karate unit test.', status: 'draft' }
    #    And request { query: '#(query)', variables: '#(variables)' }
    #    And header x-hasura-admin-secret = 'admin_secret_for_testing'
    #    And header x-hasura-role = 'author'
    #    And header x-hasura-user-id = 1
    #    When method post
    #    * status 200
    #    * match response == "#object"
    #    * match response.errors == '#notpresent'
    #    * def row_obj = response.data.insert_cms_post
    #    * match row_obj contains { affected_rows : 1 }
    #
    #Scenario: Authors: Can Delete Own Posts
    #    Given def query = read('deletePost.gql')
    #    And def variables = { title: 'karate_test' }
    #    And request { query: '#(query)', variables: '#(variables)' }
    #    And header x-hasura-admin-secret = 'admin_secret_for_testing'
    #    And header x-hasura-role = 'author'
    #    And header x-hasura-user-id = 1
    #    When method post
    #    * status 200
    #    * match response == "#object"
    #    * match response.errors == '#notpresent'
    #    * def row_obj = response.data.delete_cms_post
    #    * def return_obj = response.data.delete_cms_post.returning[0]
    #    * match row_obj contains { affected_rows : 1 }
    #    * match return_obj contains { title: "karate_test" }
