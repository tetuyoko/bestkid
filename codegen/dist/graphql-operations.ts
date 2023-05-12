export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "cms.post" */
export type Cms_Post = {
  __typename?: 'cms_post';
  author_id: Scalars['Int'];
  content: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  status: Scalars['String'];
  title: Scalars['String'];
  /** An object relationship */
  user: Cms_User;
};

/** aggregated selection of "cms.post" */
export type Cms_Post_Aggregate = {
  __typename?: 'cms_post_aggregate';
  aggregate?: Maybe<Cms_Post_Aggregate_Fields>;
  nodes: Array<Cms_Post>;
};

export type Cms_Post_Aggregate_Bool_Exp = {
  count?: InputMaybe<Cms_Post_Aggregate_Bool_Exp_Count>;
};

export type Cms_Post_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Cms_Post_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Cms_Post_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "cms.post" */
export type Cms_Post_Aggregate_Fields = {
  __typename?: 'cms_post_aggregate_fields';
  avg?: Maybe<Cms_Post_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Cms_Post_Max_Fields>;
  min?: Maybe<Cms_Post_Min_Fields>;
  stddev?: Maybe<Cms_Post_Stddev_Fields>;
  stddev_pop?: Maybe<Cms_Post_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Cms_Post_Stddev_Samp_Fields>;
  sum?: Maybe<Cms_Post_Sum_Fields>;
  var_pop?: Maybe<Cms_Post_Var_Pop_Fields>;
  var_samp?: Maybe<Cms_Post_Var_Samp_Fields>;
  variance?: Maybe<Cms_Post_Variance_Fields>;
};


/** aggregate fields of "cms.post" */
export type Cms_Post_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cms_Post_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "cms.post" */
export type Cms_Post_Aggregate_Order_By = {
  avg?: InputMaybe<Cms_Post_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Cms_Post_Max_Order_By>;
  min?: InputMaybe<Cms_Post_Min_Order_By>;
  stddev?: InputMaybe<Cms_Post_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Cms_Post_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Cms_Post_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Cms_Post_Sum_Order_By>;
  var_pop?: InputMaybe<Cms_Post_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Cms_Post_Var_Samp_Order_By>;
  variance?: InputMaybe<Cms_Post_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "cms.post" */
export type Cms_Post_Arr_Rel_Insert_Input = {
  data: Array<Cms_Post_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Cms_Post_On_Conflict>;
};

/** aggregate avg on columns */
export type Cms_Post_Avg_Fields = {
  __typename?: 'cms_post_avg_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "cms.post" */
export type Cms_Post_Avg_Order_By = {
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "cms.post". All fields are combined with a logical 'AND'. */
export type Cms_Post_Bool_Exp = {
  _and?: InputMaybe<Array<Cms_Post_Bool_Exp>>;
  _not?: InputMaybe<Cms_Post_Bool_Exp>;
  _or?: InputMaybe<Array<Cms_Post_Bool_Exp>>;
  author_id?: InputMaybe<Int_Comparison_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Cms_User_Bool_Exp>;
};

/** unique or primary key constraints on table "cms.post" */
export enum Cms_Post_Constraint {
  /** unique or primary key constraint on columns "id" */
  PostsPkey = 'posts_pkey'
}

/** input type for incrementing numeric columns in table "cms.post" */
export type Cms_Post_Inc_Input = {
  author_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "cms.post" */
export type Cms_Post_Insert_Input = {
  author_id?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Cms_User_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Cms_Post_Max_Fields = {
  __typename?: 'cms_post_max_fields';
  author_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "cms.post" */
export type Cms_Post_Max_Order_By = {
  author_id?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Cms_Post_Min_Fields = {
  __typename?: 'cms_post_min_fields';
  author_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "cms.post" */
export type Cms_Post_Min_Order_By = {
  author_id?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "cms.post" */
export type Cms_Post_Mutation_Response = {
  __typename?: 'cms_post_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Cms_Post>;
};

/** on_conflict condition type for table "cms.post" */
export type Cms_Post_On_Conflict = {
  constraint: Cms_Post_Constraint;
  update_columns?: Array<Cms_Post_Update_Column>;
  where?: InputMaybe<Cms_Post_Bool_Exp>;
};

/** Ordering options when selecting data from "cms.post". */
export type Cms_Post_Order_By = {
  author_id?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  user?: InputMaybe<Cms_User_Order_By>;
};

/** primary key columns input for table: cms.post */
export type Cms_Post_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "cms.post" */
export enum Cms_Post_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "cms.post" */
export type Cms_Post_Set_Input = {
  author_id?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Cms_Post_Stddev_Fields = {
  __typename?: 'cms_post_stddev_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "cms.post" */
export type Cms_Post_Stddev_Order_By = {
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Cms_Post_Stddev_Pop_Fields = {
  __typename?: 'cms_post_stddev_pop_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "cms.post" */
export type Cms_Post_Stddev_Pop_Order_By = {
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Cms_Post_Stddev_Samp_Fields = {
  __typename?: 'cms_post_stddev_samp_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "cms.post" */
export type Cms_Post_Stddev_Samp_Order_By = {
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "cms_post" */
export type Cms_Post_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Cms_Post_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Cms_Post_Stream_Cursor_Value_Input = {
  author_id?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Cms_Post_Sum_Fields = {
  __typename?: 'cms_post_sum_fields';
  author_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "cms.post" */
export type Cms_Post_Sum_Order_By = {
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "cms.post" */
export enum Cms_Post_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title'
}

export type Cms_Post_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Cms_Post_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Cms_Post_Set_Input>;
  /** filter the rows which have to be updated */
  where: Cms_Post_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Cms_Post_Var_Pop_Fields = {
  __typename?: 'cms_post_var_pop_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "cms.post" */
export type Cms_Post_Var_Pop_Order_By = {
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Cms_Post_Var_Samp_Fields = {
  __typename?: 'cms_post_var_samp_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "cms.post" */
export type Cms_Post_Var_Samp_Order_By = {
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Cms_Post_Variance_Fields = {
  __typename?: 'cms_post_variance_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "cms.post" */
export type Cms_Post_Variance_Order_By = {
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "cms.user" */
export type Cms_User = {
  __typename?: 'cms_user';
  email: Scalars['String'];
  id: Scalars['Int'];
  /** An array relationship */
  posts: Array<Cms_Post>;
  /** An aggregate relationship */
  posts_aggregate: Cms_Post_Aggregate;
  role: Scalars['String'];
  username: Scalars['String'];
};


/** columns and relationships of "cms.user" */
export type Cms_UserPostsArgs = {
  distinct_on?: InputMaybe<Array<Cms_Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cms_Post_Order_By>>;
  where?: InputMaybe<Cms_Post_Bool_Exp>;
};


/** columns and relationships of "cms.user" */
export type Cms_UserPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cms_Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cms_Post_Order_By>>;
  where?: InputMaybe<Cms_Post_Bool_Exp>;
};

/** aggregated selection of "cms.user" */
export type Cms_User_Aggregate = {
  __typename?: 'cms_user_aggregate';
  aggregate?: Maybe<Cms_User_Aggregate_Fields>;
  nodes: Array<Cms_User>;
};

/** aggregate fields of "cms.user" */
export type Cms_User_Aggregate_Fields = {
  __typename?: 'cms_user_aggregate_fields';
  avg?: Maybe<Cms_User_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Cms_User_Max_Fields>;
  min?: Maybe<Cms_User_Min_Fields>;
  stddev?: Maybe<Cms_User_Stddev_Fields>;
  stddev_pop?: Maybe<Cms_User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Cms_User_Stddev_Samp_Fields>;
  sum?: Maybe<Cms_User_Sum_Fields>;
  var_pop?: Maybe<Cms_User_Var_Pop_Fields>;
  var_samp?: Maybe<Cms_User_Var_Samp_Fields>;
  variance?: Maybe<Cms_User_Variance_Fields>;
};


/** aggregate fields of "cms.user" */
export type Cms_User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cms_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Cms_User_Avg_Fields = {
  __typename?: 'cms_user_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "cms.user". All fields are combined with a logical 'AND'. */
export type Cms_User_Bool_Exp = {
  _and?: InputMaybe<Array<Cms_User_Bool_Exp>>;
  _not?: InputMaybe<Cms_User_Bool_Exp>;
  _or?: InputMaybe<Array<Cms_User_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  posts?: InputMaybe<Cms_Post_Bool_Exp>;
  posts_aggregate?: InputMaybe<Cms_Post_Aggregate_Bool_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "cms.user" */
export enum Cms_User_Constraint {
  /** unique or primary key constraint on columns "id" */
  AuthorPkey = 'author_pkey'
}

/** input type for incrementing numeric columns in table "cms.user" */
export type Cms_User_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "cms.user" */
export type Cms_User_Insert_Input = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  posts?: InputMaybe<Cms_Post_Arr_Rel_Insert_Input>;
  role?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Cms_User_Max_Fields = {
  __typename?: 'cms_user_max_fields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Cms_User_Min_Fields = {
  __typename?: 'cms_user_min_fields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "cms.user" */
export type Cms_User_Mutation_Response = {
  __typename?: 'cms_user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Cms_User>;
};

/** input type for inserting object relation for remote table "cms.user" */
export type Cms_User_Obj_Rel_Insert_Input = {
  data: Cms_User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Cms_User_On_Conflict>;
};

/** on_conflict condition type for table "cms.user" */
export type Cms_User_On_Conflict = {
  constraint: Cms_User_Constraint;
  update_columns?: Array<Cms_User_Update_Column>;
  where?: InputMaybe<Cms_User_Bool_Exp>;
};

/** Ordering options when selecting data from "cms.user". */
export type Cms_User_Order_By = {
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  posts_aggregate?: InputMaybe<Cms_Post_Aggregate_Order_By>;
  role?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: cms.user */
export type Cms_User_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "cms.user" */
export enum Cms_User_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "cms.user" */
export type Cms_User_Set_Input = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  role?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Cms_User_Stddev_Fields = {
  __typename?: 'cms_user_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Cms_User_Stddev_Pop_Fields = {
  __typename?: 'cms_user_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Cms_User_Stddev_Samp_Fields = {
  __typename?: 'cms_user_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "cms_user" */
export type Cms_User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Cms_User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Cms_User_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  role?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Cms_User_Sum_Fields = {
  __typename?: 'cms_user_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "cms.user" */
export enum Cms_User_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  Username = 'username'
}

export type Cms_User_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Cms_User_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Cms_User_Set_Input>;
  /** filter the rows which have to be updated */
  where: Cms_User_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Cms_User_Var_Pop_Fields = {
  __typename?: 'cms_user_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Cms_User_Var_Samp_Fields = {
  __typename?: 'cms_user_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Cms_User_Variance_Fields = {
  __typename?: 'cms_user_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "cms.post" */
  delete_cms_post?: Maybe<Cms_Post_Mutation_Response>;
  /** delete single row from the table: "cms.post" */
  delete_cms_post_by_pk?: Maybe<Cms_Post>;
  /** delete data from the table: "cms.user" */
  delete_cms_user?: Maybe<Cms_User_Mutation_Response>;
  /** delete single row from the table: "cms.user" */
  delete_cms_user_by_pk?: Maybe<Cms_User>;
  /** insert data into the table: "cms.post" */
  insert_cms_post?: Maybe<Cms_Post_Mutation_Response>;
  /** insert a single row into the table: "cms.post" */
  insert_cms_post_one?: Maybe<Cms_Post>;
  /** insert data into the table: "cms.user" */
  insert_cms_user?: Maybe<Cms_User_Mutation_Response>;
  /** insert a single row into the table: "cms.user" */
  insert_cms_user_one?: Maybe<Cms_User>;
  /** update data of the table: "cms.post" */
  update_cms_post?: Maybe<Cms_Post_Mutation_Response>;
  /** update single row of the table: "cms.post" */
  update_cms_post_by_pk?: Maybe<Cms_Post>;
  /** update multiples rows of table: "cms.post" */
  update_cms_post_many?: Maybe<Array<Maybe<Cms_Post_Mutation_Response>>>;
  /** update data of the table: "cms.user" */
  update_cms_user?: Maybe<Cms_User_Mutation_Response>;
  /** update single row of the table: "cms.user" */
  update_cms_user_by_pk?: Maybe<Cms_User>;
  /** update multiples rows of table: "cms.user" */
  update_cms_user_many?: Maybe<Array<Maybe<Cms_User_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Cms_PostArgs = {
  where: Cms_Post_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Cms_Post_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Cms_UserArgs = {
  where: Cms_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Cms_User_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_Cms_PostArgs = {
  objects: Array<Cms_Post_Insert_Input>;
  on_conflict?: InputMaybe<Cms_Post_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cms_Post_OneArgs = {
  object: Cms_Post_Insert_Input;
  on_conflict?: InputMaybe<Cms_Post_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cms_UserArgs = {
  objects: Array<Cms_User_Insert_Input>;
  on_conflict?: InputMaybe<Cms_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cms_User_OneArgs = {
  object: Cms_User_Insert_Input;
  on_conflict?: InputMaybe<Cms_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Cms_PostArgs = {
  _inc?: InputMaybe<Cms_Post_Inc_Input>;
  _set?: InputMaybe<Cms_Post_Set_Input>;
  where: Cms_Post_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cms_Post_By_PkArgs = {
  _inc?: InputMaybe<Cms_Post_Inc_Input>;
  _set?: InputMaybe<Cms_Post_Set_Input>;
  pk_columns: Cms_Post_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Cms_Post_ManyArgs = {
  updates: Array<Cms_Post_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Cms_UserArgs = {
  _inc?: InputMaybe<Cms_User_Inc_Input>;
  _set?: InputMaybe<Cms_User_Set_Input>;
  where: Cms_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cms_User_By_PkArgs = {
  _inc?: InputMaybe<Cms_User_Inc_Input>;
  _set?: InputMaybe<Cms_User_Set_Input>;
  pk_columns: Cms_User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Cms_User_ManyArgs = {
  updates: Array<Cms_User_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "cms.post" */
  cms_post: Array<Cms_Post>;
  /** fetch aggregated fields from the table: "cms.post" */
  cms_post_aggregate: Cms_Post_Aggregate;
  /** fetch data from the table: "cms.post" using primary key columns */
  cms_post_by_pk?: Maybe<Cms_Post>;
  /** fetch data from the table: "cms.user" */
  cms_user: Array<Cms_User>;
  /** fetch aggregated fields from the table: "cms.user" */
  cms_user_aggregate: Cms_User_Aggregate;
  /** fetch data from the table: "cms.user" using primary key columns */
  cms_user_by_pk?: Maybe<Cms_User>;
};


export type Query_RootCms_PostArgs = {
  distinct_on?: InputMaybe<Array<Cms_Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cms_Post_Order_By>>;
  where?: InputMaybe<Cms_Post_Bool_Exp>;
};


export type Query_RootCms_Post_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cms_Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cms_Post_Order_By>>;
  where?: InputMaybe<Cms_Post_Bool_Exp>;
};


export type Query_RootCms_Post_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootCms_UserArgs = {
  distinct_on?: InputMaybe<Array<Cms_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cms_User_Order_By>>;
  where?: InputMaybe<Cms_User_Bool_Exp>;
};


export type Query_RootCms_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cms_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cms_User_Order_By>>;
  where?: InputMaybe<Cms_User_Bool_Exp>;
};


export type Query_RootCms_User_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "cms.post" */
  cms_post: Array<Cms_Post>;
  /** fetch aggregated fields from the table: "cms.post" */
  cms_post_aggregate: Cms_Post_Aggregate;
  /** fetch data from the table: "cms.post" using primary key columns */
  cms_post_by_pk?: Maybe<Cms_Post>;
  /** fetch data from the table in a streaming manner: "cms.post" */
  cms_post_stream: Array<Cms_Post>;
  /** fetch data from the table: "cms.user" */
  cms_user: Array<Cms_User>;
  /** fetch aggregated fields from the table: "cms.user" */
  cms_user_aggregate: Cms_User_Aggregate;
  /** fetch data from the table: "cms.user" using primary key columns */
  cms_user_by_pk?: Maybe<Cms_User>;
  /** fetch data from the table in a streaming manner: "cms.user" */
  cms_user_stream: Array<Cms_User>;
};


export type Subscription_RootCms_PostArgs = {
  distinct_on?: InputMaybe<Array<Cms_Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cms_Post_Order_By>>;
  where?: InputMaybe<Cms_Post_Bool_Exp>;
};


export type Subscription_RootCms_Post_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cms_Post_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cms_Post_Order_By>>;
  where?: InputMaybe<Cms_Post_Bool_Exp>;
};


export type Subscription_RootCms_Post_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCms_Post_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Cms_Post_Stream_Cursor_Input>>;
  where?: InputMaybe<Cms_Post_Bool_Exp>;
};


export type Subscription_RootCms_UserArgs = {
  distinct_on?: InputMaybe<Array<Cms_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cms_User_Order_By>>;
  where?: InputMaybe<Cms_User_Bool_Exp>;
};


export type Subscription_RootCms_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cms_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cms_User_Order_By>>;
  where?: InputMaybe<Cms_User_Bool_Exp>;
};


export type Subscription_RootCms_User_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCms_User_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Cms_User_Stream_Cursor_Input>>;
  where?: InputMaybe<Cms_User_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

export type CreatePostMutationVariables = Exact<{
  title?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
}>;


export type CreatePostMutation = { __typename?: 'mutation_root', insert_cms_post?: { __typename?: 'cms_post_mutation_response', affected_rows: number } | null };

export type DeletePostMutationVariables = Exact<{
  title?: InputMaybe<Scalars['String']>;
}>;


export type DeletePostMutation = { __typename?: 'mutation_root', delete_cms_post?: { __typename?: 'cms_post_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'cms_post', title: string }> } | null };

export type GetPostsQueryVariables = Exact<{
  status?: InputMaybe<Scalars['String']>;
}>;


export type GetPostsQuery = { __typename?: 'query_root', cms_post: Array<{ __typename?: 'cms_post', id: number, title: string, content: string, status: string, created_at: any, author_id: number, user: { __typename?: 'cms_user', username: string, role: string } }> };
