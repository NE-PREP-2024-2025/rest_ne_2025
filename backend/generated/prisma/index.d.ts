
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ParkingLot
 * 
 */
export type ParkingLot = $Result.DefaultSelection<Prisma.$ParkingLotPayload>
/**
 * Model ParkingTicket
 * 
 */
export type ParkingTicket = $Result.DefaultSelection<Prisma.$ParkingTicketPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  PARKING_ATTENDANT: 'PARKING_ATTENDANT'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parkingLot`: Exposes CRUD operations for the **ParkingLot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParkingLots
    * const parkingLots = await prisma.parkingLot.findMany()
    * ```
    */
  get parkingLot(): Prisma.ParkingLotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parkingTicket`: Exposes CRUD operations for the **ParkingTicket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParkingTickets
    * const parkingTickets = await prisma.parkingTicket.findMany()
    * ```
    */
  get parkingTicket(): Prisma.ParkingTicketDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    ParkingLot: 'ParkingLot',
    ParkingTicket: 'ParkingTicket'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "parkingLot" | "parkingTicket"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ParkingLot: {
        payload: Prisma.$ParkingLotPayload<ExtArgs>
        fields: Prisma.ParkingLotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParkingLotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParkingLotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload>
          }
          findFirst: {
            args: Prisma.ParkingLotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParkingLotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload>
          }
          findMany: {
            args: Prisma.ParkingLotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload>[]
          }
          create: {
            args: Prisma.ParkingLotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload>
          }
          createMany: {
            args: Prisma.ParkingLotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParkingLotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload>[]
          }
          delete: {
            args: Prisma.ParkingLotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload>
          }
          update: {
            args: Prisma.ParkingLotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload>
          }
          deleteMany: {
            args: Prisma.ParkingLotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParkingLotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParkingLotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload>[]
          }
          upsert: {
            args: Prisma.ParkingLotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingLotPayload>
          }
          aggregate: {
            args: Prisma.ParkingLotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParkingLot>
          }
          groupBy: {
            args: Prisma.ParkingLotGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParkingLotGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParkingLotCountArgs<ExtArgs>
            result: $Utils.Optional<ParkingLotCountAggregateOutputType> | number
          }
        }
      }
      ParkingTicket: {
        payload: Prisma.$ParkingTicketPayload<ExtArgs>
        fields: Prisma.ParkingTicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParkingTicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingTicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParkingTicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingTicketPayload>
          }
          findFirst: {
            args: Prisma.ParkingTicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingTicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParkingTicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingTicketPayload>
          }
          findMany: {
            args: Prisma.ParkingTicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingTicketPayload>[]
          }
          create: {
            args: Prisma.ParkingTicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingTicketPayload>
          }
          createMany: {
            args: Prisma.ParkingTicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParkingTicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingTicketPayload>[]
          }
          delete: {
            args: Prisma.ParkingTicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingTicketPayload>
          }
          update: {
            args: Prisma.ParkingTicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingTicketPayload>
          }
          deleteMany: {
            args: Prisma.ParkingTicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParkingTicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParkingTicketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingTicketPayload>[]
          }
          upsert: {
            args: Prisma.ParkingTicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingTicketPayload>
          }
          aggregate: {
            args: Prisma.ParkingTicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParkingTicket>
          }
          groupBy: {
            args: Prisma.ParkingTicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParkingTicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParkingTicketCountArgs<ExtArgs>
            result: $Utils.Optional<ParkingTicketCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    parkingLot?: ParkingLotOmit
    parkingTicket?: ParkingTicketOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    parkingLotOrders: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkingLotOrders?: boolean | UserCountOutputTypeCountParkingLotOrdersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountParkingLotOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingTicketWhereInput
  }


  /**
   * Count Type ParkingLotCountOutputType
   */

  export type ParkingLotCountOutputType = {
    parkingTickets: number
  }

  export type ParkingLotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkingTickets?: boolean | ParkingLotCountOutputTypeCountParkingTicketsArgs
  }

  // Custom InputTypes
  /**
   * ParkingLotCountOutputType without action
   */
  export type ParkingLotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLotCountOutputType
     */
    select?: ParkingLotCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParkingLotCountOutputType without action
   */
  export type ParkingLotCountOutputTypeCountParkingTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingTicketWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    emailVerified: boolean | null
    emailVerificationToken: string | null
    emailVerificationTokenExpires: Date | null
    resetPasswordToken: string | null
    resetPasswordTokenExpires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    emailVerified: boolean | null
    emailVerificationToken: string | null
    emailVerificationTokenExpires: Date | null
    resetPasswordToken: string | null
    resetPasswordTokenExpires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    password: number
    role: number
    emailVerified: number
    emailVerificationToken: number
    emailVerificationTokenExpires: number
    resetPasswordToken: number
    resetPasswordTokenExpires: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
    emailVerified?: true
    emailVerificationToken?: true
    emailVerificationTokenExpires?: true
    resetPasswordToken?: true
    resetPasswordTokenExpires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
    emailVerified?: true
    emailVerificationToken?: true
    emailVerificationTokenExpires?: true
    resetPasswordToken?: true
    resetPasswordTokenExpires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
    emailVerified?: true
    emailVerificationToken?: true
    emailVerificationTokenExpires?: true
    resetPasswordToken?: true
    resetPasswordTokenExpires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.Role
    emailVerified: boolean
    emailVerificationToken: string | null
    emailVerificationTokenExpires: Date | null
    resetPasswordToken: string | null
    resetPasswordTokenExpires: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    emailVerified?: boolean
    emailVerificationToken?: boolean
    emailVerificationTokenExpires?: boolean
    resetPasswordToken?: boolean
    resetPasswordTokenExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parkingLotOrders?: boolean | User$parkingLotOrdersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    emailVerified?: boolean
    emailVerificationToken?: boolean
    emailVerificationTokenExpires?: boolean
    resetPasswordToken?: boolean
    resetPasswordTokenExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    emailVerified?: boolean
    emailVerificationToken?: boolean
    emailVerificationTokenExpires?: boolean
    resetPasswordToken?: boolean
    resetPasswordTokenExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    emailVerified?: boolean
    emailVerificationToken?: boolean
    emailVerificationTokenExpires?: boolean
    resetPasswordToken?: boolean
    resetPasswordTokenExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "password" | "role" | "emailVerified" | "emailVerificationToken" | "emailVerificationTokenExpires" | "resetPasswordToken" | "resetPasswordTokenExpires" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkingLotOrders?: boolean | User$parkingLotOrdersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      parkingLotOrders: Prisma.$ParkingTicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string
      password: string
      role: $Enums.Role
      emailVerified: boolean
      emailVerificationToken: string | null
      emailVerificationTokenExpires: Date | null
      resetPasswordToken: string | null
      resetPasswordTokenExpires: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parkingLotOrders<T extends User$parkingLotOrdersArgs<ExtArgs> = {}>(args?: Subset<T, User$parkingLotOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly emailVerificationToken: FieldRef<"User", 'String'>
    readonly emailVerificationTokenExpires: FieldRef<"User", 'DateTime'>
    readonly resetPasswordToken: FieldRef<"User", 'String'>
    readonly resetPasswordTokenExpires: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.parkingLotOrders
   */
  export type User$parkingLotOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingTicket
     */
    select?: ParkingTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingTicket
     */
    omit?: ParkingTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingTicketInclude<ExtArgs> | null
    where?: ParkingTicketWhereInput
    orderBy?: ParkingTicketOrderByWithRelationInput | ParkingTicketOrderByWithRelationInput[]
    cursor?: ParkingTicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkingTicketScalarFieldEnum | ParkingTicketScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ParkingLot
   */

  export type AggregateParkingLot = {
    _count: ParkingLotCountAggregateOutputType | null
    _avg: ParkingLotAvgAggregateOutputType | null
    _sum: ParkingLotSumAggregateOutputType | null
    _min: ParkingLotMinAggregateOutputType | null
    _max: ParkingLotMaxAggregateOutputType | null
  }

  export type ParkingLotAvgAggregateOutputType = {
    numberOfAvailableSpace: number | null
    feesPerHour: number | null
  }

  export type ParkingLotSumAggregateOutputType = {
    numberOfAvailableSpace: number | null
    feesPerHour: number | null
  }

  export type ParkingLotMinAggregateOutputType = {
    code: string | null
    parkingName: string | null
    numberOfAvailableSpace: number | null
    location: string | null
    feesPerHour: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParkingLotMaxAggregateOutputType = {
    code: string | null
    parkingName: string | null
    numberOfAvailableSpace: number | null
    location: string | null
    feesPerHour: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParkingLotCountAggregateOutputType = {
    code: number
    parkingName: number
    numberOfAvailableSpace: number
    location: number
    feesPerHour: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ParkingLotAvgAggregateInputType = {
    numberOfAvailableSpace?: true
    feesPerHour?: true
  }

  export type ParkingLotSumAggregateInputType = {
    numberOfAvailableSpace?: true
    feesPerHour?: true
  }

  export type ParkingLotMinAggregateInputType = {
    code?: true
    parkingName?: true
    numberOfAvailableSpace?: true
    location?: true
    feesPerHour?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParkingLotMaxAggregateInputType = {
    code?: true
    parkingName?: true
    numberOfAvailableSpace?: true
    location?: true
    feesPerHour?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParkingLotCountAggregateInputType = {
    code?: true
    parkingName?: true
    numberOfAvailableSpace?: true
    location?: true
    feesPerHour?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ParkingLotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingLot to aggregate.
     */
    where?: ParkingLotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingLots to fetch.
     */
    orderBy?: ParkingLotOrderByWithRelationInput | ParkingLotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParkingLotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingLots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingLots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParkingLots
    **/
    _count?: true | ParkingLotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParkingLotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParkingLotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParkingLotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParkingLotMaxAggregateInputType
  }

  export type GetParkingLotAggregateType<T extends ParkingLotAggregateArgs> = {
        [P in keyof T & keyof AggregateParkingLot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParkingLot[P]>
      : GetScalarType<T[P], AggregateParkingLot[P]>
  }




  export type ParkingLotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingLotWhereInput
    orderBy?: ParkingLotOrderByWithAggregationInput | ParkingLotOrderByWithAggregationInput[]
    by: ParkingLotScalarFieldEnum[] | ParkingLotScalarFieldEnum
    having?: ParkingLotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParkingLotCountAggregateInputType | true
    _avg?: ParkingLotAvgAggregateInputType
    _sum?: ParkingLotSumAggregateInputType
    _min?: ParkingLotMinAggregateInputType
    _max?: ParkingLotMaxAggregateInputType
  }

  export type ParkingLotGroupByOutputType = {
    code: string
    parkingName: string
    numberOfAvailableSpace: number
    location: string
    feesPerHour: number
    createdAt: Date
    updatedAt: Date
    _count: ParkingLotCountAggregateOutputType | null
    _avg: ParkingLotAvgAggregateOutputType | null
    _sum: ParkingLotSumAggregateOutputType | null
    _min: ParkingLotMinAggregateOutputType | null
    _max: ParkingLotMaxAggregateOutputType | null
  }

  type GetParkingLotGroupByPayload<T extends ParkingLotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParkingLotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParkingLotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParkingLotGroupByOutputType[P]>
            : GetScalarType<T[P], ParkingLotGroupByOutputType[P]>
        }
      >
    >


  export type ParkingLotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    parkingName?: boolean
    numberOfAvailableSpace?: boolean
    location?: boolean
    feesPerHour?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parkingTickets?: boolean | ParkingLot$parkingTicketsArgs<ExtArgs>
    _count?: boolean | ParkingLotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingLot"]>

  export type ParkingLotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    parkingName?: boolean
    numberOfAvailableSpace?: boolean
    location?: boolean
    feesPerHour?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["parkingLot"]>

  export type ParkingLotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    parkingName?: boolean
    numberOfAvailableSpace?: boolean
    location?: boolean
    feesPerHour?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["parkingLot"]>

  export type ParkingLotSelectScalar = {
    code?: boolean
    parkingName?: boolean
    numberOfAvailableSpace?: boolean
    location?: boolean
    feesPerHour?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ParkingLotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"code" | "parkingName" | "numberOfAvailableSpace" | "location" | "feesPerHour" | "createdAt" | "updatedAt", ExtArgs["result"]["parkingLot"]>
  export type ParkingLotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkingTickets?: boolean | ParkingLot$parkingTicketsArgs<ExtArgs>
    _count?: boolean | ParkingLotCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParkingLotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ParkingLotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ParkingLotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParkingLot"
    objects: {
      parkingTickets: Prisma.$ParkingTicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      code: string
      parkingName: string
      numberOfAvailableSpace: number
      location: string
      feesPerHour: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["parkingLot"]>
    composites: {}
  }

  type ParkingLotGetPayload<S extends boolean | null | undefined | ParkingLotDefaultArgs> = $Result.GetResult<Prisma.$ParkingLotPayload, S>

  type ParkingLotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParkingLotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParkingLotCountAggregateInputType | true
    }

  export interface ParkingLotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParkingLot'], meta: { name: 'ParkingLot' } }
    /**
     * Find zero or one ParkingLot that matches the filter.
     * @param {ParkingLotFindUniqueArgs} args - Arguments to find a ParkingLot
     * @example
     * // Get one ParkingLot
     * const parkingLot = await prisma.parkingLot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParkingLotFindUniqueArgs>(args: SelectSubset<T, ParkingLotFindUniqueArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParkingLot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParkingLotFindUniqueOrThrowArgs} args - Arguments to find a ParkingLot
     * @example
     * // Get one ParkingLot
     * const parkingLot = await prisma.parkingLot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParkingLotFindUniqueOrThrowArgs>(args: SelectSubset<T, ParkingLotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkingLot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotFindFirstArgs} args - Arguments to find a ParkingLot
     * @example
     * // Get one ParkingLot
     * const parkingLot = await prisma.parkingLot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParkingLotFindFirstArgs>(args?: SelectSubset<T, ParkingLotFindFirstArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkingLot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotFindFirstOrThrowArgs} args - Arguments to find a ParkingLot
     * @example
     * // Get one ParkingLot
     * const parkingLot = await prisma.parkingLot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParkingLotFindFirstOrThrowArgs>(args?: SelectSubset<T, ParkingLotFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParkingLots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParkingLots
     * const parkingLots = await prisma.parkingLot.findMany()
     * 
     * // Get first 10 ParkingLots
     * const parkingLots = await prisma.parkingLot.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const parkingLotWithCodeOnly = await prisma.parkingLot.findMany({ select: { code: true } })
     * 
     */
    findMany<T extends ParkingLotFindManyArgs>(args?: SelectSubset<T, ParkingLotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParkingLot.
     * @param {ParkingLotCreateArgs} args - Arguments to create a ParkingLot.
     * @example
     * // Create one ParkingLot
     * const ParkingLot = await prisma.parkingLot.create({
     *   data: {
     *     // ... data to create a ParkingLot
     *   }
     * })
     * 
     */
    create<T extends ParkingLotCreateArgs>(args: SelectSubset<T, ParkingLotCreateArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParkingLots.
     * @param {ParkingLotCreateManyArgs} args - Arguments to create many ParkingLots.
     * @example
     * // Create many ParkingLots
     * const parkingLot = await prisma.parkingLot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParkingLotCreateManyArgs>(args?: SelectSubset<T, ParkingLotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParkingLots and returns the data saved in the database.
     * @param {ParkingLotCreateManyAndReturnArgs} args - Arguments to create many ParkingLots.
     * @example
     * // Create many ParkingLots
     * const parkingLot = await prisma.parkingLot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParkingLots and only return the `code`
     * const parkingLotWithCodeOnly = await prisma.parkingLot.createManyAndReturn({
     *   select: { code: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParkingLotCreateManyAndReturnArgs>(args?: SelectSubset<T, ParkingLotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParkingLot.
     * @param {ParkingLotDeleteArgs} args - Arguments to delete one ParkingLot.
     * @example
     * // Delete one ParkingLot
     * const ParkingLot = await prisma.parkingLot.delete({
     *   where: {
     *     // ... filter to delete one ParkingLot
     *   }
     * })
     * 
     */
    delete<T extends ParkingLotDeleteArgs>(args: SelectSubset<T, ParkingLotDeleteArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParkingLot.
     * @param {ParkingLotUpdateArgs} args - Arguments to update one ParkingLot.
     * @example
     * // Update one ParkingLot
     * const parkingLot = await prisma.parkingLot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParkingLotUpdateArgs>(args: SelectSubset<T, ParkingLotUpdateArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParkingLots.
     * @param {ParkingLotDeleteManyArgs} args - Arguments to filter ParkingLots to delete.
     * @example
     * // Delete a few ParkingLots
     * const { count } = await prisma.parkingLot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParkingLotDeleteManyArgs>(args?: SelectSubset<T, ParkingLotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingLots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParkingLots
     * const parkingLot = await prisma.parkingLot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParkingLotUpdateManyArgs>(args: SelectSubset<T, ParkingLotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingLots and returns the data updated in the database.
     * @param {ParkingLotUpdateManyAndReturnArgs} args - Arguments to update many ParkingLots.
     * @example
     * // Update many ParkingLots
     * const parkingLot = await prisma.parkingLot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParkingLots and only return the `code`
     * const parkingLotWithCodeOnly = await prisma.parkingLot.updateManyAndReturn({
     *   select: { code: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParkingLotUpdateManyAndReturnArgs>(args: SelectSubset<T, ParkingLotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParkingLot.
     * @param {ParkingLotUpsertArgs} args - Arguments to update or create a ParkingLot.
     * @example
     * // Update or create a ParkingLot
     * const parkingLot = await prisma.parkingLot.upsert({
     *   create: {
     *     // ... data to create a ParkingLot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParkingLot we want to update
     *   }
     * })
     */
    upsert<T extends ParkingLotUpsertArgs>(args: SelectSubset<T, ParkingLotUpsertArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParkingLots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotCountArgs} args - Arguments to filter ParkingLots to count.
     * @example
     * // Count the number of ParkingLots
     * const count = await prisma.parkingLot.count({
     *   where: {
     *     // ... the filter for the ParkingLots we want to count
     *   }
     * })
    **/
    count<T extends ParkingLotCountArgs>(
      args?: Subset<T, ParkingLotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParkingLotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParkingLot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParkingLotAggregateArgs>(args: Subset<T, ParkingLotAggregateArgs>): Prisma.PrismaPromise<GetParkingLotAggregateType<T>>

    /**
     * Group by ParkingLot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingLotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParkingLotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParkingLotGroupByArgs['orderBy'] }
        : { orderBy?: ParkingLotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParkingLotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkingLotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParkingLot model
   */
  readonly fields: ParkingLotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParkingLot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParkingLotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parkingTickets<T extends ParkingLot$parkingTicketsArgs<ExtArgs> = {}>(args?: Subset<T, ParkingLot$parkingTicketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ParkingLot model
   */
  interface ParkingLotFieldRefs {
    readonly code: FieldRef<"ParkingLot", 'String'>
    readonly parkingName: FieldRef<"ParkingLot", 'String'>
    readonly numberOfAvailableSpace: FieldRef<"ParkingLot", 'Int'>
    readonly location: FieldRef<"ParkingLot", 'String'>
    readonly feesPerHour: FieldRef<"ParkingLot", 'Float'>
    readonly createdAt: FieldRef<"ParkingLot", 'DateTime'>
    readonly updatedAt: FieldRef<"ParkingLot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ParkingLot findUnique
   */
  export type ParkingLotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLot
     */
    omit?: ParkingLotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingLot to fetch.
     */
    where: ParkingLotWhereUniqueInput
  }

  /**
   * ParkingLot findUniqueOrThrow
   */
  export type ParkingLotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLot
     */
    omit?: ParkingLotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingLot to fetch.
     */
    where: ParkingLotWhereUniqueInput
  }

  /**
   * ParkingLot findFirst
   */
  export type ParkingLotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLot
     */
    omit?: ParkingLotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingLot to fetch.
     */
    where?: ParkingLotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingLots to fetch.
     */
    orderBy?: ParkingLotOrderByWithRelationInput | ParkingLotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingLots.
     */
    cursor?: ParkingLotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingLots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingLots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingLots.
     */
    distinct?: ParkingLotScalarFieldEnum | ParkingLotScalarFieldEnum[]
  }

  /**
   * ParkingLot findFirstOrThrow
   */
  export type ParkingLotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLot
     */
    omit?: ParkingLotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingLot to fetch.
     */
    where?: ParkingLotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingLots to fetch.
     */
    orderBy?: ParkingLotOrderByWithRelationInput | ParkingLotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingLots.
     */
    cursor?: ParkingLotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingLots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingLots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingLots.
     */
    distinct?: ParkingLotScalarFieldEnum | ParkingLotScalarFieldEnum[]
  }

  /**
   * ParkingLot findMany
   */
  export type ParkingLotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLot
     */
    omit?: ParkingLotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingLots to fetch.
     */
    where?: ParkingLotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingLots to fetch.
     */
    orderBy?: ParkingLotOrderByWithRelationInput | ParkingLotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParkingLots.
     */
    cursor?: ParkingLotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingLots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingLots.
     */
    skip?: number
    distinct?: ParkingLotScalarFieldEnum | ParkingLotScalarFieldEnum[]
  }

  /**
   * ParkingLot create
   */
  export type ParkingLotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLot
     */
    omit?: ParkingLotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotInclude<ExtArgs> | null
    /**
     * The data needed to create a ParkingLot.
     */
    data: XOR<ParkingLotCreateInput, ParkingLotUncheckedCreateInput>
  }

  /**
   * ParkingLot createMany
   */
  export type ParkingLotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParkingLots.
     */
    data: ParkingLotCreateManyInput | ParkingLotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParkingLot createManyAndReturn
   */
  export type ParkingLotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLot
     */
    omit?: ParkingLotOmit<ExtArgs> | null
    /**
     * The data used to create many ParkingLots.
     */
    data: ParkingLotCreateManyInput | ParkingLotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParkingLot update
   */
  export type ParkingLotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLot
     */
    omit?: ParkingLotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotInclude<ExtArgs> | null
    /**
     * The data needed to update a ParkingLot.
     */
    data: XOR<ParkingLotUpdateInput, ParkingLotUncheckedUpdateInput>
    /**
     * Choose, which ParkingLot to update.
     */
    where: ParkingLotWhereUniqueInput
  }

  /**
   * ParkingLot updateMany
   */
  export type ParkingLotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParkingLots.
     */
    data: XOR<ParkingLotUpdateManyMutationInput, ParkingLotUncheckedUpdateManyInput>
    /**
     * Filter which ParkingLots to update
     */
    where?: ParkingLotWhereInput
    /**
     * Limit how many ParkingLots to update.
     */
    limit?: number
  }

  /**
   * ParkingLot updateManyAndReturn
   */
  export type ParkingLotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLot
     */
    omit?: ParkingLotOmit<ExtArgs> | null
    /**
     * The data used to update ParkingLots.
     */
    data: XOR<ParkingLotUpdateManyMutationInput, ParkingLotUncheckedUpdateManyInput>
    /**
     * Filter which ParkingLots to update
     */
    where?: ParkingLotWhereInput
    /**
     * Limit how many ParkingLots to update.
     */
    limit?: number
  }

  /**
   * ParkingLot upsert
   */
  export type ParkingLotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLot
     */
    omit?: ParkingLotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotInclude<ExtArgs> | null
    /**
     * The filter to search for the ParkingLot to update in case it exists.
     */
    where: ParkingLotWhereUniqueInput
    /**
     * In case the ParkingLot found by the `where` argument doesn't exist, create a new ParkingLot with this data.
     */
    create: XOR<ParkingLotCreateInput, ParkingLotUncheckedCreateInput>
    /**
     * In case the ParkingLot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParkingLotUpdateInput, ParkingLotUncheckedUpdateInput>
  }

  /**
   * ParkingLot delete
   */
  export type ParkingLotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLot
     */
    omit?: ParkingLotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotInclude<ExtArgs> | null
    /**
     * Filter which ParkingLot to delete.
     */
    where: ParkingLotWhereUniqueInput
  }

  /**
   * ParkingLot deleteMany
   */
  export type ParkingLotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingLots to delete
     */
    where?: ParkingLotWhereInput
    /**
     * Limit how many ParkingLots to delete.
     */
    limit?: number
  }

  /**
   * ParkingLot.parkingTickets
   */
  export type ParkingLot$parkingTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingTicket
     */
    select?: ParkingTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingTicket
     */
    omit?: ParkingTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingTicketInclude<ExtArgs> | null
    where?: ParkingTicketWhereInput
    orderBy?: ParkingTicketOrderByWithRelationInput | ParkingTicketOrderByWithRelationInput[]
    cursor?: ParkingTicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkingTicketScalarFieldEnum | ParkingTicketScalarFieldEnum[]
  }

  /**
   * ParkingLot without action
   */
  export type ParkingLotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingLot
     */
    select?: ParkingLotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingLot
     */
    omit?: ParkingLotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingLotInclude<ExtArgs> | null
  }


  /**
   * Model ParkingTicket
   */

  export type AggregateParkingTicket = {
    _count: ParkingTicketCountAggregateOutputType | null
    _avg: ParkingTicketAvgAggregateOutputType | null
    _sum: ParkingTicketSumAggregateOutputType | null
    _min: ParkingTicketMinAggregateOutputType | null
    _max: ParkingTicketMaxAggregateOutputType | null
  }

  export type ParkingTicketAvgAggregateOutputType = {
    amount: number | null
  }

  export type ParkingTicketSumAggregateOutputType = {
    amount: number | null
  }

  export type ParkingTicketMinAggregateOutputType = {
    id: string | null
    plateNumber: string | null
    entry_date: Date | null
    exit_date: Date | null
    amount: number | null
    parking_code: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParkingTicketMaxAggregateOutputType = {
    id: string | null
    plateNumber: string | null
    entry_date: Date | null
    exit_date: Date | null
    amount: number | null
    parking_code: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParkingTicketCountAggregateOutputType = {
    id: number
    plateNumber: number
    entry_date: number
    exit_date: number
    amount: number
    parking_code: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ParkingTicketAvgAggregateInputType = {
    amount?: true
  }

  export type ParkingTicketSumAggregateInputType = {
    amount?: true
  }

  export type ParkingTicketMinAggregateInputType = {
    id?: true
    plateNumber?: true
    entry_date?: true
    exit_date?: true
    amount?: true
    parking_code?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParkingTicketMaxAggregateInputType = {
    id?: true
    plateNumber?: true
    entry_date?: true
    exit_date?: true
    amount?: true
    parking_code?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParkingTicketCountAggregateInputType = {
    id?: true
    plateNumber?: true
    entry_date?: true
    exit_date?: true
    amount?: true
    parking_code?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ParkingTicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingTicket to aggregate.
     */
    where?: ParkingTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingTickets to fetch.
     */
    orderBy?: ParkingTicketOrderByWithRelationInput | ParkingTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParkingTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParkingTickets
    **/
    _count?: true | ParkingTicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParkingTicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParkingTicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParkingTicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParkingTicketMaxAggregateInputType
  }

  export type GetParkingTicketAggregateType<T extends ParkingTicketAggregateArgs> = {
        [P in keyof T & keyof AggregateParkingTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParkingTicket[P]>
      : GetScalarType<T[P], AggregateParkingTicket[P]>
  }




  export type ParkingTicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingTicketWhereInput
    orderBy?: ParkingTicketOrderByWithAggregationInput | ParkingTicketOrderByWithAggregationInput[]
    by: ParkingTicketScalarFieldEnum[] | ParkingTicketScalarFieldEnum
    having?: ParkingTicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParkingTicketCountAggregateInputType | true
    _avg?: ParkingTicketAvgAggregateInputType
    _sum?: ParkingTicketSumAggregateInputType
    _min?: ParkingTicketMinAggregateInputType
    _max?: ParkingTicketMaxAggregateInputType
  }

  export type ParkingTicketGroupByOutputType = {
    id: string
    plateNumber: string
    entry_date: Date
    exit_date: Date | null
    amount: number
    parking_code: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: ParkingTicketCountAggregateOutputType | null
    _avg: ParkingTicketAvgAggregateOutputType | null
    _sum: ParkingTicketSumAggregateOutputType | null
    _min: ParkingTicketMinAggregateOutputType | null
    _max: ParkingTicketMaxAggregateOutputType | null
  }

  type GetParkingTicketGroupByPayload<T extends ParkingTicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParkingTicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParkingTicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParkingTicketGroupByOutputType[P]>
            : GetScalarType<T[P], ParkingTicketGroupByOutputType[P]>
        }
      >
    >


  export type ParkingTicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plateNumber?: boolean
    entry_date?: boolean
    exit_date?: boolean
    amount?: boolean
    parking_code?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingTicket"]>

  export type ParkingTicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plateNumber?: boolean
    entry_date?: boolean
    exit_date?: boolean
    amount?: boolean
    parking_code?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingTicket"]>

  export type ParkingTicketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plateNumber?: boolean
    entry_date?: boolean
    exit_date?: boolean
    amount?: boolean
    parking_code?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingTicket"]>

  export type ParkingTicketSelectScalar = {
    id?: boolean
    plateNumber?: boolean
    entry_date?: boolean
    exit_date?: boolean
    amount?: boolean
    parking_code?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ParkingTicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "plateNumber" | "entry_date" | "exit_date" | "amount" | "parking_code" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["parkingTicket"]>
  export type ParkingTicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ParkingTicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ParkingTicketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkingLot?: boolean | ParkingLotDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ParkingTicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParkingTicket"
    objects: {
      parkingLot: Prisma.$ParkingLotPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      plateNumber: string
      entry_date: Date
      exit_date: Date | null
      amount: number
      parking_code: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["parkingTicket"]>
    composites: {}
  }

  type ParkingTicketGetPayload<S extends boolean | null | undefined | ParkingTicketDefaultArgs> = $Result.GetResult<Prisma.$ParkingTicketPayload, S>

  type ParkingTicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParkingTicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParkingTicketCountAggregateInputType | true
    }

  export interface ParkingTicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParkingTicket'], meta: { name: 'ParkingTicket' } }
    /**
     * Find zero or one ParkingTicket that matches the filter.
     * @param {ParkingTicketFindUniqueArgs} args - Arguments to find a ParkingTicket
     * @example
     * // Get one ParkingTicket
     * const parkingTicket = await prisma.parkingTicket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParkingTicketFindUniqueArgs>(args: SelectSubset<T, ParkingTicketFindUniqueArgs<ExtArgs>>): Prisma__ParkingTicketClient<$Result.GetResult<Prisma.$ParkingTicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParkingTicket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParkingTicketFindUniqueOrThrowArgs} args - Arguments to find a ParkingTicket
     * @example
     * // Get one ParkingTicket
     * const parkingTicket = await prisma.parkingTicket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParkingTicketFindUniqueOrThrowArgs>(args: SelectSubset<T, ParkingTicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParkingTicketClient<$Result.GetResult<Prisma.$ParkingTicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkingTicket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingTicketFindFirstArgs} args - Arguments to find a ParkingTicket
     * @example
     * // Get one ParkingTicket
     * const parkingTicket = await prisma.parkingTicket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParkingTicketFindFirstArgs>(args?: SelectSubset<T, ParkingTicketFindFirstArgs<ExtArgs>>): Prisma__ParkingTicketClient<$Result.GetResult<Prisma.$ParkingTicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkingTicket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingTicketFindFirstOrThrowArgs} args - Arguments to find a ParkingTicket
     * @example
     * // Get one ParkingTicket
     * const parkingTicket = await prisma.parkingTicket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParkingTicketFindFirstOrThrowArgs>(args?: SelectSubset<T, ParkingTicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParkingTicketClient<$Result.GetResult<Prisma.$ParkingTicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParkingTickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingTicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParkingTickets
     * const parkingTickets = await prisma.parkingTicket.findMany()
     * 
     * // Get first 10 ParkingTickets
     * const parkingTickets = await prisma.parkingTicket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parkingTicketWithIdOnly = await prisma.parkingTicket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParkingTicketFindManyArgs>(args?: SelectSubset<T, ParkingTicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParkingTicket.
     * @param {ParkingTicketCreateArgs} args - Arguments to create a ParkingTicket.
     * @example
     * // Create one ParkingTicket
     * const ParkingTicket = await prisma.parkingTicket.create({
     *   data: {
     *     // ... data to create a ParkingTicket
     *   }
     * })
     * 
     */
    create<T extends ParkingTicketCreateArgs>(args: SelectSubset<T, ParkingTicketCreateArgs<ExtArgs>>): Prisma__ParkingTicketClient<$Result.GetResult<Prisma.$ParkingTicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParkingTickets.
     * @param {ParkingTicketCreateManyArgs} args - Arguments to create many ParkingTickets.
     * @example
     * // Create many ParkingTickets
     * const parkingTicket = await prisma.parkingTicket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParkingTicketCreateManyArgs>(args?: SelectSubset<T, ParkingTicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParkingTickets and returns the data saved in the database.
     * @param {ParkingTicketCreateManyAndReturnArgs} args - Arguments to create many ParkingTickets.
     * @example
     * // Create many ParkingTickets
     * const parkingTicket = await prisma.parkingTicket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParkingTickets and only return the `id`
     * const parkingTicketWithIdOnly = await prisma.parkingTicket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParkingTicketCreateManyAndReturnArgs>(args?: SelectSubset<T, ParkingTicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingTicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParkingTicket.
     * @param {ParkingTicketDeleteArgs} args - Arguments to delete one ParkingTicket.
     * @example
     * // Delete one ParkingTicket
     * const ParkingTicket = await prisma.parkingTicket.delete({
     *   where: {
     *     // ... filter to delete one ParkingTicket
     *   }
     * })
     * 
     */
    delete<T extends ParkingTicketDeleteArgs>(args: SelectSubset<T, ParkingTicketDeleteArgs<ExtArgs>>): Prisma__ParkingTicketClient<$Result.GetResult<Prisma.$ParkingTicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParkingTicket.
     * @param {ParkingTicketUpdateArgs} args - Arguments to update one ParkingTicket.
     * @example
     * // Update one ParkingTicket
     * const parkingTicket = await prisma.parkingTicket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParkingTicketUpdateArgs>(args: SelectSubset<T, ParkingTicketUpdateArgs<ExtArgs>>): Prisma__ParkingTicketClient<$Result.GetResult<Prisma.$ParkingTicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParkingTickets.
     * @param {ParkingTicketDeleteManyArgs} args - Arguments to filter ParkingTickets to delete.
     * @example
     * // Delete a few ParkingTickets
     * const { count } = await prisma.parkingTicket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParkingTicketDeleteManyArgs>(args?: SelectSubset<T, ParkingTicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingTicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParkingTickets
     * const parkingTicket = await prisma.parkingTicket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParkingTicketUpdateManyArgs>(args: SelectSubset<T, ParkingTicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingTickets and returns the data updated in the database.
     * @param {ParkingTicketUpdateManyAndReturnArgs} args - Arguments to update many ParkingTickets.
     * @example
     * // Update many ParkingTickets
     * const parkingTicket = await prisma.parkingTicket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParkingTickets and only return the `id`
     * const parkingTicketWithIdOnly = await prisma.parkingTicket.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParkingTicketUpdateManyAndReturnArgs>(args: SelectSubset<T, ParkingTicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingTicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParkingTicket.
     * @param {ParkingTicketUpsertArgs} args - Arguments to update or create a ParkingTicket.
     * @example
     * // Update or create a ParkingTicket
     * const parkingTicket = await prisma.parkingTicket.upsert({
     *   create: {
     *     // ... data to create a ParkingTicket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParkingTicket we want to update
     *   }
     * })
     */
    upsert<T extends ParkingTicketUpsertArgs>(args: SelectSubset<T, ParkingTicketUpsertArgs<ExtArgs>>): Prisma__ParkingTicketClient<$Result.GetResult<Prisma.$ParkingTicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParkingTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingTicketCountArgs} args - Arguments to filter ParkingTickets to count.
     * @example
     * // Count the number of ParkingTickets
     * const count = await prisma.parkingTicket.count({
     *   where: {
     *     // ... the filter for the ParkingTickets we want to count
     *   }
     * })
    **/
    count<T extends ParkingTicketCountArgs>(
      args?: Subset<T, ParkingTicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParkingTicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParkingTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingTicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParkingTicketAggregateArgs>(args: Subset<T, ParkingTicketAggregateArgs>): Prisma.PrismaPromise<GetParkingTicketAggregateType<T>>

    /**
     * Group by ParkingTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingTicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParkingTicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParkingTicketGroupByArgs['orderBy'] }
        : { orderBy?: ParkingTicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParkingTicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkingTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParkingTicket model
   */
  readonly fields: ParkingTicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParkingTicket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParkingTicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parkingLot<T extends ParkingLotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParkingLotDefaultArgs<ExtArgs>>): Prisma__ParkingLotClient<$Result.GetResult<Prisma.$ParkingLotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ParkingTicket model
   */
  interface ParkingTicketFieldRefs {
    readonly id: FieldRef<"ParkingTicket", 'String'>
    readonly plateNumber: FieldRef<"ParkingTicket", 'String'>
    readonly entry_date: FieldRef<"ParkingTicket", 'DateTime'>
    readonly exit_date: FieldRef<"ParkingTicket", 'DateTime'>
    readonly amount: FieldRef<"ParkingTicket", 'Float'>
    readonly parking_code: FieldRef<"ParkingTicket", 'String'>
    readonly userId: FieldRef<"ParkingTicket", 'String'>
    readonly createdAt: FieldRef<"ParkingTicket", 'DateTime'>
    readonly updatedAt: FieldRef<"ParkingTicket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ParkingTicket findUnique
   */
  export type ParkingTicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingTicket
     */
    select?: ParkingTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingTicket
     */
    omit?: ParkingTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingTicketInclude<ExtArgs> | null
    /**
     * Filter, which ParkingTicket to fetch.
     */
    where: ParkingTicketWhereUniqueInput
  }

  /**
   * ParkingTicket findUniqueOrThrow
   */
  export type ParkingTicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingTicket
     */
    select?: ParkingTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingTicket
     */
    omit?: ParkingTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingTicketInclude<ExtArgs> | null
    /**
     * Filter, which ParkingTicket to fetch.
     */
    where: ParkingTicketWhereUniqueInput
  }

  /**
   * ParkingTicket findFirst
   */
  export type ParkingTicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingTicket
     */
    select?: ParkingTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingTicket
     */
    omit?: ParkingTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingTicketInclude<ExtArgs> | null
    /**
     * Filter, which ParkingTicket to fetch.
     */
    where?: ParkingTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingTickets to fetch.
     */
    orderBy?: ParkingTicketOrderByWithRelationInput | ParkingTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingTickets.
     */
    cursor?: ParkingTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingTickets.
     */
    distinct?: ParkingTicketScalarFieldEnum | ParkingTicketScalarFieldEnum[]
  }

  /**
   * ParkingTicket findFirstOrThrow
   */
  export type ParkingTicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingTicket
     */
    select?: ParkingTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingTicket
     */
    omit?: ParkingTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingTicketInclude<ExtArgs> | null
    /**
     * Filter, which ParkingTicket to fetch.
     */
    where?: ParkingTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingTickets to fetch.
     */
    orderBy?: ParkingTicketOrderByWithRelationInput | ParkingTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingTickets.
     */
    cursor?: ParkingTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingTickets.
     */
    distinct?: ParkingTicketScalarFieldEnum | ParkingTicketScalarFieldEnum[]
  }

  /**
   * ParkingTicket findMany
   */
  export type ParkingTicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingTicket
     */
    select?: ParkingTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingTicket
     */
    omit?: ParkingTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingTicketInclude<ExtArgs> | null
    /**
     * Filter, which ParkingTickets to fetch.
     */
    where?: ParkingTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingTickets to fetch.
     */
    orderBy?: ParkingTicketOrderByWithRelationInput | ParkingTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParkingTickets.
     */
    cursor?: ParkingTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingTickets.
     */
    skip?: number
    distinct?: ParkingTicketScalarFieldEnum | ParkingTicketScalarFieldEnum[]
  }

  /**
   * ParkingTicket create
   */
  export type ParkingTicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingTicket
     */
    select?: ParkingTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingTicket
     */
    omit?: ParkingTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingTicketInclude<ExtArgs> | null
    /**
     * The data needed to create a ParkingTicket.
     */
    data: XOR<ParkingTicketCreateInput, ParkingTicketUncheckedCreateInput>
  }

  /**
   * ParkingTicket createMany
   */
  export type ParkingTicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParkingTickets.
     */
    data: ParkingTicketCreateManyInput | ParkingTicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParkingTicket createManyAndReturn
   */
  export type ParkingTicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingTicket
     */
    select?: ParkingTicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingTicket
     */
    omit?: ParkingTicketOmit<ExtArgs> | null
    /**
     * The data used to create many ParkingTickets.
     */
    data: ParkingTicketCreateManyInput | ParkingTicketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingTicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParkingTicket update
   */
  export type ParkingTicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingTicket
     */
    select?: ParkingTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingTicket
     */
    omit?: ParkingTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingTicketInclude<ExtArgs> | null
    /**
     * The data needed to update a ParkingTicket.
     */
    data: XOR<ParkingTicketUpdateInput, ParkingTicketUncheckedUpdateInput>
    /**
     * Choose, which ParkingTicket to update.
     */
    where: ParkingTicketWhereUniqueInput
  }

  /**
   * ParkingTicket updateMany
   */
  export type ParkingTicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParkingTickets.
     */
    data: XOR<ParkingTicketUpdateManyMutationInput, ParkingTicketUncheckedUpdateManyInput>
    /**
     * Filter which ParkingTickets to update
     */
    where?: ParkingTicketWhereInput
    /**
     * Limit how many ParkingTickets to update.
     */
    limit?: number
  }

  /**
   * ParkingTicket updateManyAndReturn
   */
  export type ParkingTicketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingTicket
     */
    select?: ParkingTicketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingTicket
     */
    omit?: ParkingTicketOmit<ExtArgs> | null
    /**
     * The data used to update ParkingTickets.
     */
    data: XOR<ParkingTicketUpdateManyMutationInput, ParkingTicketUncheckedUpdateManyInput>
    /**
     * Filter which ParkingTickets to update
     */
    where?: ParkingTicketWhereInput
    /**
     * Limit how many ParkingTickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingTicketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParkingTicket upsert
   */
  export type ParkingTicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingTicket
     */
    select?: ParkingTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingTicket
     */
    omit?: ParkingTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingTicketInclude<ExtArgs> | null
    /**
     * The filter to search for the ParkingTicket to update in case it exists.
     */
    where: ParkingTicketWhereUniqueInput
    /**
     * In case the ParkingTicket found by the `where` argument doesn't exist, create a new ParkingTicket with this data.
     */
    create: XOR<ParkingTicketCreateInput, ParkingTicketUncheckedCreateInput>
    /**
     * In case the ParkingTicket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParkingTicketUpdateInput, ParkingTicketUncheckedUpdateInput>
  }

  /**
   * ParkingTicket delete
   */
  export type ParkingTicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingTicket
     */
    select?: ParkingTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingTicket
     */
    omit?: ParkingTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingTicketInclude<ExtArgs> | null
    /**
     * Filter which ParkingTicket to delete.
     */
    where: ParkingTicketWhereUniqueInput
  }

  /**
   * ParkingTicket deleteMany
   */
  export type ParkingTicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingTickets to delete
     */
    where?: ParkingTicketWhereInput
    /**
     * Limit how many ParkingTickets to delete.
     */
    limit?: number
  }

  /**
   * ParkingTicket without action
   */
  export type ParkingTicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingTicket
     */
    select?: ParkingTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingTicket
     */
    omit?: ParkingTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingTicketInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    role: 'role',
    emailVerified: 'emailVerified',
    emailVerificationToken: 'emailVerificationToken',
    emailVerificationTokenExpires: 'emailVerificationTokenExpires',
    resetPasswordToken: 'resetPasswordToken',
    resetPasswordTokenExpires: 'resetPasswordTokenExpires',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ParkingLotScalarFieldEnum: {
    code: 'code',
    parkingName: 'parkingName',
    numberOfAvailableSpace: 'numberOfAvailableSpace',
    location: 'location',
    feesPerHour: 'feesPerHour',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ParkingLotScalarFieldEnum = (typeof ParkingLotScalarFieldEnum)[keyof typeof ParkingLotScalarFieldEnum]


  export const ParkingTicketScalarFieldEnum: {
    id: 'id',
    plateNumber: 'plateNumber',
    entry_date: 'entry_date',
    exit_date: 'exit_date',
    amount: 'amount',
    parking_code: 'parking_code',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ParkingTicketScalarFieldEnum = (typeof ParkingTicketScalarFieldEnum)[keyof typeof ParkingTicketScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    emailVerified?: BoolFilter<"User"> | boolean
    emailVerificationToken?: StringNullableFilter<"User"> | string | null
    emailVerificationTokenExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    resetPasswordToken?: StringNullableFilter<"User"> | string | null
    resetPasswordTokenExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    parkingLotOrders?: ParkingTicketListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    emailVerified?: SortOrder
    emailVerificationToken?: SortOrderInput | SortOrder
    emailVerificationTokenExpires?: SortOrderInput | SortOrder
    resetPasswordToken?: SortOrderInput | SortOrder
    resetPasswordTokenExpires?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parkingLotOrders?: ParkingTicketOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    emailVerified?: BoolFilter<"User"> | boolean
    emailVerificationToken?: StringNullableFilter<"User"> | string | null
    emailVerificationTokenExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    resetPasswordToken?: StringNullableFilter<"User"> | string | null
    resetPasswordTokenExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    parkingLotOrders?: ParkingTicketListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    emailVerified?: SortOrder
    emailVerificationToken?: SortOrderInput | SortOrder
    emailVerificationTokenExpires?: SortOrderInput | SortOrder
    resetPasswordToken?: SortOrderInput | SortOrder
    resetPasswordTokenExpires?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    emailVerificationToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerificationTokenExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    resetPasswordToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetPasswordTokenExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ParkingLotWhereInput = {
    AND?: ParkingLotWhereInput | ParkingLotWhereInput[]
    OR?: ParkingLotWhereInput[]
    NOT?: ParkingLotWhereInput | ParkingLotWhereInput[]
    code?: StringFilter<"ParkingLot"> | string
    parkingName?: StringFilter<"ParkingLot"> | string
    numberOfAvailableSpace?: IntFilter<"ParkingLot"> | number
    location?: StringFilter<"ParkingLot"> | string
    feesPerHour?: FloatFilter<"ParkingLot"> | number
    createdAt?: DateTimeFilter<"ParkingLot"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingLot"> | Date | string
    parkingTickets?: ParkingTicketListRelationFilter
  }

  export type ParkingLotOrderByWithRelationInput = {
    code?: SortOrder
    parkingName?: SortOrder
    numberOfAvailableSpace?: SortOrder
    location?: SortOrder
    feesPerHour?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parkingTickets?: ParkingTicketOrderByRelationAggregateInput
  }

  export type ParkingLotWhereUniqueInput = Prisma.AtLeast<{
    code?: string
    AND?: ParkingLotWhereInput | ParkingLotWhereInput[]
    OR?: ParkingLotWhereInput[]
    NOT?: ParkingLotWhereInput | ParkingLotWhereInput[]
    parkingName?: StringFilter<"ParkingLot"> | string
    numberOfAvailableSpace?: IntFilter<"ParkingLot"> | number
    location?: StringFilter<"ParkingLot"> | string
    feesPerHour?: FloatFilter<"ParkingLot"> | number
    createdAt?: DateTimeFilter<"ParkingLot"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingLot"> | Date | string
    parkingTickets?: ParkingTicketListRelationFilter
  }, "code" | "code">

  export type ParkingLotOrderByWithAggregationInput = {
    code?: SortOrder
    parkingName?: SortOrder
    numberOfAvailableSpace?: SortOrder
    location?: SortOrder
    feesPerHour?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ParkingLotCountOrderByAggregateInput
    _avg?: ParkingLotAvgOrderByAggregateInput
    _max?: ParkingLotMaxOrderByAggregateInput
    _min?: ParkingLotMinOrderByAggregateInput
    _sum?: ParkingLotSumOrderByAggregateInput
  }

  export type ParkingLotScalarWhereWithAggregatesInput = {
    AND?: ParkingLotScalarWhereWithAggregatesInput | ParkingLotScalarWhereWithAggregatesInput[]
    OR?: ParkingLotScalarWhereWithAggregatesInput[]
    NOT?: ParkingLotScalarWhereWithAggregatesInput | ParkingLotScalarWhereWithAggregatesInput[]
    code?: StringWithAggregatesFilter<"ParkingLot"> | string
    parkingName?: StringWithAggregatesFilter<"ParkingLot"> | string
    numberOfAvailableSpace?: IntWithAggregatesFilter<"ParkingLot"> | number
    location?: StringWithAggregatesFilter<"ParkingLot"> | string
    feesPerHour?: FloatWithAggregatesFilter<"ParkingLot"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ParkingLot"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ParkingLot"> | Date | string
  }

  export type ParkingTicketWhereInput = {
    AND?: ParkingTicketWhereInput | ParkingTicketWhereInput[]
    OR?: ParkingTicketWhereInput[]
    NOT?: ParkingTicketWhereInput | ParkingTicketWhereInput[]
    id?: StringFilter<"ParkingTicket"> | string
    plateNumber?: StringFilter<"ParkingTicket"> | string
    entry_date?: DateTimeFilter<"ParkingTicket"> | Date | string
    exit_date?: DateTimeNullableFilter<"ParkingTicket"> | Date | string | null
    amount?: FloatFilter<"ParkingTicket"> | number
    parking_code?: StringFilter<"ParkingTicket"> | string
    userId?: StringFilter<"ParkingTicket"> | string
    createdAt?: DateTimeFilter<"ParkingTicket"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingTicket"> | Date | string
    parkingLot?: XOR<ParkingLotScalarRelationFilter, ParkingLotWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ParkingTicketOrderByWithRelationInput = {
    id?: SortOrder
    plateNumber?: SortOrder
    entry_date?: SortOrder
    exit_date?: SortOrderInput | SortOrder
    amount?: SortOrder
    parking_code?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parkingLot?: ParkingLotOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ParkingTicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ParkingTicketWhereInput | ParkingTicketWhereInput[]
    OR?: ParkingTicketWhereInput[]
    NOT?: ParkingTicketWhereInput | ParkingTicketWhereInput[]
    plateNumber?: StringFilter<"ParkingTicket"> | string
    entry_date?: DateTimeFilter<"ParkingTicket"> | Date | string
    exit_date?: DateTimeNullableFilter<"ParkingTicket"> | Date | string | null
    amount?: FloatFilter<"ParkingTicket"> | number
    parking_code?: StringFilter<"ParkingTicket"> | string
    userId?: StringFilter<"ParkingTicket"> | string
    createdAt?: DateTimeFilter<"ParkingTicket"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingTicket"> | Date | string
    parkingLot?: XOR<ParkingLotScalarRelationFilter, ParkingLotWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ParkingTicketOrderByWithAggregationInput = {
    id?: SortOrder
    plateNumber?: SortOrder
    entry_date?: SortOrder
    exit_date?: SortOrderInput | SortOrder
    amount?: SortOrder
    parking_code?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ParkingTicketCountOrderByAggregateInput
    _avg?: ParkingTicketAvgOrderByAggregateInput
    _max?: ParkingTicketMaxOrderByAggregateInput
    _min?: ParkingTicketMinOrderByAggregateInput
    _sum?: ParkingTicketSumOrderByAggregateInput
  }

  export type ParkingTicketScalarWhereWithAggregatesInput = {
    AND?: ParkingTicketScalarWhereWithAggregatesInput | ParkingTicketScalarWhereWithAggregatesInput[]
    OR?: ParkingTicketScalarWhereWithAggregatesInput[]
    NOT?: ParkingTicketScalarWhereWithAggregatesInput | ParkingTicketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ParkingTicket"> | string
    plateNumber?: StringWithAggregatesFilter<"ParkingTicket"> | string
    entry_date?: DateTimeWithAggregatesFilter<"ParkingTicket"> | Date | string
    exit_date?: DateTimeNullableWithAggregatesFilter<"ParkingTicket"> | Date | string | null
    amount?: FloatWithAggregatesFilter<"ParkingTicket"> | number
    parking_code?: StringWithAggregatesFilter<"ParkingTicket"> | string
    userId?: StringWithAggregatesFilter<"ParkingTicket"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ParkingTicket"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ParkingTicket"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    role?: $Enums.Role
    emailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingLotOrders?: ParkingTicketCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    role?: $Enums.Role
    emailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingLotOrders?: ParkingTicketUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingLotOrders?: ParkingTicketUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingLotOrders?: ParkingTicketUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    role?: $Enums.Role
    emailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingLotCreateInput = {
    code: string
    parkingName: string
    numberOfAvailableSpace: number
    location: string
    feesPerHour: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingTickets?: ParkingTicketCreateNestedManyWithoutParkingLotInput
  }

  export type ParkingLotUncheckedCreateInput = {
    code: string
    parkingName: string
    numberOfAvailableSpace: number
    location: string
    feesPerHour: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingTickets?: ParkingTicketUncheckedCreateNestedManyWithoutParkingLotInput
  }

  export type ParkingLotUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    parkingName?: StringFieldUpdateOperationsInput | string
    numberOfAvailableSpace?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    feesPerHour?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingTickets?: ParkingTicketUpdateManyWithoutParkingLotNestedInput
  }

  export type ParkingLotUncheckedUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    parkingName?: StringFieldUpdateOperationsInput | string
    numberOfAvailableSpace?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    feesPerHour?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingTickets?: ParkingTicketUncheckedUpdateManyWithoutParkingLotNestedInput
  }

  export type ParkingLotCreateManyInput = {
    code: string
    parkingName: string
    numberOfAvailableSpace: number
    location: string
    feesPerHour: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingLotUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    parkingName?: StringFieldUpdateOperationsInput | string
    numberOfAvailableSpace?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    feesPerHour?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingLotUncheckedUpdateManyInput = {
    code?: StringFieldUpdateOperationsInput | string
    parkingName?: StringFieldUpdateOperationsInput | string
    numberOfAvailableSpace?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    feesPerHour?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingTicketCreateInput = {
    id?: string
    plateNumber: string
    entry_date: Date | string
    exit_date?: Date | string | null
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingLot: ParkingLotCreateNestedOneWithoutParkingTicketsInput
    user: UserCreateNestedOneWithoutParkingLotOrdersInput
  }

  export type ParkingTicketUncheckedCreateInput = {
    id?: string
    plateNumber: string
    entry_date: Date | string
    exit_date?: Date | string | null
    amount: number
    parking_code: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingTicketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    entry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    exit_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingLot?: ParkingLotUpdateOneRequiredWithoutParkingTicketsNestedInput
    user?: UserUpdateOneRequiredWithoutParkingLotOrdersNestedInput
  }

  export type ParkingTicketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    entry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    exit_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    parking_code?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingTicketCreateManyInput = {
    id?: string
    plateNumber: string
    entry_date: Date | string
    exit_date?: Date | string | null
    amount: number
    parking_code: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingTicketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    entry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    exit_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingTicketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    entry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    exit_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    parking_code?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ParkingTicketListRelationFilter = {
    every?: ParkingTicketWhereInput
    some?: ParkingTicketWhereInput
    none?: ParkingTicketWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ParkingTicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    emailVerified?: SortOrder
    emailVerificationToken?: SortOrder
    emailVerificationTokenExpires?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordTokenExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    emailVerified?: SortOrder
    emailVerificationToken?: SortOrder
    emailVerificationTokenExpires?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordTokenExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    emailVerified?: SortOrder
    emailVerificationToken?: SortOrder
    emailVerificationTokenExpires?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordTokenExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ParkingLotCountOrderByAggregateInput = {
    code?: SortOrder
    parkingName?: SortOrder
    numberOfAvailableSpace?: SortOrder
    location?: SortOrder
    feesPerHour?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkingLotAvgOrderByAggregateInput = {
    numberOfAvailableSpace?: SortOrder
    feesPerHour?: SortOrder
  }

  export type ParkingLotMaxOrderByAggregateInput = {
    code?: SortOrder
    parkingName?: SortOrder
    numberOfAvailableSpace?: SortOrder
    location?: SortOrder
    feesPerHour?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkingLotMinOrderByAggregateInput = {
    code?: SortOrder
    parkingName?: SortOrder
    numberOfAvailableSpace?: SortOrder
    location?: SortOrder
    feesPerHour?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkingLotSumOrderByAggregateInput = {
    numberOfAvailableSpace?: SortOrder
    feesPerHour?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ParkingLotScalarRelationFilter = {
    is?: ParkingLotWhereInput
    isNot?: ParkingLotWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ParkingTicketCountOrderByAggregateInput = {
    id?: SortOrder
    plateNumber?: SortOrder
    entry_date?: SortOrder
    exit_date?: SortOrder
    amount?: SortOrder
    parking_code?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkingTicketAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ParkingTicketMaxOrderByAggregateInput = {
    id?: SortOrder
    plateNumber?: SortOrder
    entry_date?: SortOrder
    exit_date?: SortOrder
    amount?: SortOrder
    parking_code?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkingTicketMinOrderByAggregateInput = {
    id?: SortOrder
    plateNumber?: SortOrder
    entry_date?: SortOrder
    exit_date?: SortOrder
    amount?: SortOrder
    parking_code?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkingTicketSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ParkingTicketCreateNestedManyWithoutUserInput = {
    create?: XOR<ParkingTicketCreateWithoutUserInput, ParkingTicketUncheckedCreateWithoutUserInput> | ParkingTicketCreateWithoutUserInput[] | ParkingTicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParkingTicketCreateOrConnectWithoutUserInput | ParkingTicketCreateOrConnectWithoutUserInput[]
    createMany?: ParkingTicketCreateManyUserInputEnvelope
    connect?: ParkingTicketWhereUniqueInput | ParkingTicketWhereUniqueInput[]
  }

  export type ParkingTicketUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ParkingTicketCreateWithoutUserInput, ParkingTicketUncheckedCreateWithoutUserInput> | ParkingTicketCreateWithoutUserInput[] | ParkingTicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParkingTicketCreateOrConnectWithoutUserInput | ParkingTicketCreateOrConnectWithoutUserInput[]
    createMany?: ParkingTicketCreateManyUserInputEnvelope
    connect?: ParkingTicketWhereUniqueInput | ParkingTicketWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ParkingTicketUpdateManyWithoutUserNestedInput = {
    create?: XOR<ParkingTicketCreateWithoutUserInput, ParkingTicketUncheckedCreateWithoutUserInput> | ParkingTicketCreateWithoutUserInput[] | ParkingTicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParkingTicketCreateOrConnectWithoutUserInput | ParkingTicketCreateOrConnectWithoutUserInput[]
    upsert?: ParkingTicketUpsertWithWhereUniqueWithoutUserInput | ParkingTicketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ParkingTicketCreateManyUserInputEnvelope
    set?: ParkingTicketWhereUniqueInput | ParkingTicketWhereUniqueInput[]
    disconnect?: ParkingTicketWhereUniqueInput | ParkingTicketWhereUniqueInput[]
    delete?: ParkingTicketWhereUniqueInput | ParkingTicketWhereUniqueInput[]
    connect?: ParkingTicketWhereUniqueInput | ParkingTicketWhereUniqueInput[]
    update?: ParkingTicketUpdateWithWhereUniqueWithoutUserInput | ParkingTicketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ParkingTicketUpdateManyWithWhereWithoutUserInput | ParkingTicketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ParkingTicketScalarWhereInput | ParkingTicketScalarWhereInput[]
  }

  export type ParkingTicketUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ParkingTicketCreateWithoutUserInput, ParkingTicketUncheckedCreateWithoutUserInput> | ParkingTicketCreateWithoutUserInput[] | ParkingTicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParkingTicketCreateOrConnectWithoutUserInput | ParkingTicketCreateOrConnectWithoutUserInput[]
    upsert?: ParkingTicketUpsertWithWhereUniqueWithoutUserInput | ParkingTicketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ParkingTicketCreateManyUserInputEnvelope
    set?: ParkingTicketWhereUniqueInput | ParkingTicketWhereUniqueInput[]
    disconnect?: ParkingTicketWhereUniqueInput | ParkingTicketWhereUniqueInput[]
    delete?: ParkingTicketWhereUniqueInput | ParkingTicketWhereUniqueInput[]
    connect?: ParkingTicketWhereUniqueInput | ParkingTicketWhereUniqueInput[]
    update?: ParkingTicketUpdateWithWhereUniqueWithoutUserInput | ParkingTicketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ParkingTicketUpdateManyWithWhereWithoutUserInput | ParkingTicketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ParkingTicketScalarWhereInput | ParkingTicketScalarWhereInput[]
  }

  export type ParkingTicketCreateNestedManyWithoutParkingLotInput = {
    create?: XOR<ParkingTicketCreateWithoutParkingLotInput, ParkingTicketUncheckedCreateWithoutParkingLotInput> | ParkingTicketCreateWithoutParkingLotInput[] | ParkingTicketUncheckedCreateWithoutParkingLotInput[]
    connectOrCreate?: ParkingTicketCreateOrConnectWithoutParkingLotInput | ParkingTicketCreateOrConnectWithoutParkingLotInput[]
    createMany?: ParkingTicketCreateManyParkingLotInputEnvelope
    connect?: ParkingTicketWhereUniqueInput | ParkingTicketWhereUniqueInput[]
  }

  export type ParkingTicketUncheckedCreateNestedManyWithoutParkingLotInput = {
    create?: XOR<ParkingTicketCreateWithoutParkingLotInput, ParkingTicketUncheckedCreateWithoutParkingLotInput> | ParkingTicketCreateWithoutParkingLotInput[] | ParkingTicketUncheckedCreateWithoutParkingLotInput[]
    connectOrCreate?: ParkingTicketCreateOrConnectWithoutParkingLotInput | ParkingTicketCreateOrConnectWithoutParkingLotInput[]
    createMany?: ParkingTicketCreateManyParkingLotInputEnvelope
    connect?: ParkingTicketWhereUniqueInput | ParkingTicketWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ParkingTicketUpdateManyWithoutParkingLotNestedInput = {
    create?: XOR<ParkingTicketCreateWithoutParkingLotInput, ParkingTicketUncheckedCreateWithoutParkingLotInput> | ParkingTicketCreateWithoutParkingLotInput[] | ParkingTicketUncheckedCreateWithoutParkingLotInput[]
    connectOrCreate?: ParkingTicketCreateOrConnectWithoutParkingLotInput | ParkingTicketCreateOrConnectWithoutParkingLotInput[]
    upsert?: ParkingTicketUpsertWithWhereUniqueWithoutParkingLotInput | ParkingTicketUpsertWithWhereUniqueWithoutParkingLotInput[]
    createMany?: ParkingTicketCreateManyParkingLotInputEnvelope
    set?: ParkingTicketWhereUniqueInput | ParkingTicketWhereUniqueInput[]
    disconnect?: ParkingTicketWhereUniqueInput | ParkingTicketWhereUniqueInput[]
    delete?: ParkingTicketWhereUniqueInput | ParkingTicketWhereUniqueInput[]
    connect?: ParkingTicketWhereUniqueInput | ParkingTicketWhereUniqueInput[]
    update?: ParkingTicketUpdateWithWhereUniqueWithoutParkingLotInput | ParkingTicketUpdateWithWhereUniqueWithoutParkingLotInput[]
    updateMany?: ParkingTicketUpdateManyWithWhereWithoutParkingLotInput | ParkingTicketUpdateManyWithWhereWithoutParkingLotInput[]
    deleteMany?: ParkingTicketScalarWhereInput | ParkingTicketScalarWhereInput[]
  }

  export type ParkingTicketUncheckedUpdateManyWithoutParkingLotNestedInput = {
    create?: XOR<ParkingTicketCreateWithoutParkingLotInput, ParkingTicketUncheckedCreateWithoutParkingLotInput> | ParkingTicketCreateWithoutParkingLotInput[] | ParkingTicketUncheckedCreateWithoutParkingLotInput[]
    connectOrCreate?: ParkingTicketCreateOrConnectWithoutParkingLotInput | ParkingTicketCreateOrConnectWithoutParkingLotInput[]
    upsert?: ParkingTicketUpsertWithWhereUniqueWithoutParkingLotInput | ParkingTicketUpsertWithWhereUniqueWithoutParkingLotInput[]
    createMany?: ParkingTicketCreateManyParkingLotInputEnvelope
    set?: ParkingTicketWhereUniqueInput | ParkingTicketWhereUniqueInput[]
    disconnect?: ParkingTicketWhereUniqueInput | ParkingTicketWhereUniqueInput[]
    delete?: ParkingTicketWhereUniqueInput | ParkingTicketWhereUniqueInput[]
    connect?: ParkingTicketWhereUniqueInput | ParkingTicketWhereUniqueInput[]
    update?: ParkingTicketUpdateWithWhereUniqueWithoutParkingLotInput | ParkingTicketUpdateWithWhereUniqueWithoutParkingLotInput[]
    updateMany?: ParkingTicketUpdateManyWithWhereWithoutParkingLotInput | ParkingTicketUpdateManyWithWhereWithoutParkingLotInput[]
    deleteMany?: ParkingTicketScalarWhereInput | ParkingTicketScalarWhereInput[]
  }

  export type ParkingLotCreateNestedOneWithoutParkingTicketsInput = {
    create?: XOR<ParkingLotCreateWithoutParkingTicketsInput, ParkingLotUncheckedCreateWithoutParkingTicketsInput>
    connectOrCreate?: ParkingLotCreateOrConnectWithoutParkingTicketsInput
    connect?: ParkingLotWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutParkingLotOrdersInput = {
    create?: XOR<UserCreateWithoutParkingLotOrdersInput, UserUncheckedCreateWithoutParkingLotOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutParkingLotOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type ParkingLotUpdateOneRequiredWithoutParkingTicketsNestedInput = {
    create?: XOR<ParkingLotCreateWithoutParkingTicketsInput, ParkingLotUncheckedCreateWithoutParkingTicketsInput>
    connectOrCreate?: ParkingLotCreateOrConnectWithoutParkingTicketsInput
    upsert?: ParkingLotUpsertWithoutParkingTicketsInput
    connect?: ParkingLotWhereUniqueInput
    update?: XOR<XOR<ParkingLotUpdateToOneWithWhereWithoutParkingTicketsInput, ParkingLotUpdateWithoutParkingTicketsInput>, ParkingLotUncheckedUpdateWithoutParkingTicketsInput>
  }

  export type UserUpdateOneRequiredWithoutParkingLotOrdersNestedInput = {
    create?: XOR<UserCreateWithoutParkingLotOrdersInput, UserUncheckedCreateWithoutParkingLotOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutParkingLotOrdersInput
    upsert?: UserUpsertWithoutParkingLotOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutParkingLotOrdersInput, UserUpdateWithoutParkingLotOrdersInput>, UserUncheckedUpdateWithoutParkingLotOrdersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ParkingTicketCreateWithoutUserInput = {
    id?: string
    plateNumber: string
    entry_date: Date | string
    exit_date?: Date | string | null
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parkingLot: ParkingLotCreateNestedOneWithoutParkingTicketsInput
  }

  export type ParkingTicketUncheckedCreateWithoutUserInput = {
    id?: string
    plateNumber: string
    entry_date: Date | string
    exit_date?: Date | string | null
    amount: number
    parking_code: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingTicketCreateOrConnectWithoutUserInput = {
    where: ParkingTicketWhereUniqueInput
    create: XOR<ParkingTicketCreateWithoutUserInput, ParkingTicketUncheckedCreateWithoutUserInput>
  }

  export type ParkingTicketCreateManyUserInputEnvelope = {
    data: ParkingTicketCreateManyUserInput | ParkingTicketCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ParkingTicketUpsertWithWhereUniqueWithoutUserInput = {
    where: ParkingTicketWhereUniqueInput
    update: XOR<ParkingTicketUpdateWithoutUserInput, ParkingTicketUncheckedUpdateWithoutUserInput>
    create: XOR<ParkingTicketCreateWithoutUserInput, ParkingTicketUncheckedCreateWithoutUserInput>
  }

  export type ParkingTicketUpdateWithWhereUniqueWithoutUserInput = {
    where: ParkingTicketWhereUniqueInput
    data: XOR<ParkingTicketUpdateWithoutUserInput, ParkingTicketUncheckedUpdateWithoutUserInput>
  }

  export type ParkingTicketUpdateManyWithWhereWithoutUserInput = {
    where: ParkingTicketScalarWhereInput
    data: XOR<ParkingTicketUpdateManyMutationInput, ParkingTicketUncheckedUpdateManyWithoutUserInput>
  }

  export type ParkingTicketScalarWhereInput = {
    AND?: ParkingTicketScalarWhereInput | ParkingTicketScalarWhereInput[]
    OR?: ParkingTicketScalarWhereInput[]
    NOT?: ParkingTicketScalarWhereInput | ParkingTicketScalarWhereInput[]
    id?: StringFilter<"ParkingTicket"> | string
    plateNumber?: StringFilter<"ParkingTicket"> | string
    entry_date?: DateTimeFilter<"ParkingTicket"> | Date | string
    exit_date?: DateTimeNullableFilter<"ParkingTicket"> | Date | string | null
    amount?: FloatFilter<"ParkingTicket"> | number
    parking_code?: StringFilter<"ParkingTicket"> | string
    userId?: StringFilter<"ParkingTicket"> | string
    createdAt?: DateTimeFilter<"ParkingTicket"> | Date | string
    updatedAt?: DateTimeFilter<"ParkingTicket"> | Date | string
  }

  export type ParkingTicketCreateWithoutParkingLotInput = {
    id?: string
    plateNumber: string
    entry_date: Date | string
    exit_date?: Date | string | null
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutParkingLotOrdersInput
  }

  export type ParkingTicketUncheckedCreateWithoutParkingLotInput = {
    id?: string
    plateNumber: string
    entry_date: Date | string
    exit_date?: Date | string | null
    amount: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingTicketCreateOrConnectWithoutParkingLotInput = {
    where: ParkingTicketWhereUniqueInput
    create: XOR<ParkingTicketCreateWithoutParkingLotInput, ParkingTicketUncheckedCreateWithoutParkingLotInput>
  }

  export type ParkingTicketCreateManyParkingLotInputEnvelope = {
    data: ParkingTicketCreateManyParkingLotInput | ParkingTicketCreateManyParkingLotInput[]
    skipDuplicates?: boolean
  }

  export type ParkingTicketUpsertWithWhereUniqueWithoutParkingLotInput = {
    where: ParkingTicketWhereUniqueInput
    update: XOR<ParkingTicketUpdateWithoutParkingLotInput, ParkingTicketUncheckedUpdateWithoutParkingLotInput>
    create: XOR<ParkingTicketCreateWithoutParkingLotInput, ParkingTicketUncheckedCreateWithoutParkingLotInput>
  }

  export type ParkingTicketUpdateWithWhereUniqueWithoutParkingLotInput = {
    where: ParkingTicketWhereUniqueInput
    data: XOR<ParkingTicketUpdateWithoutParkingLotInput, ParkingTicketUncheckedUpdateWithoutParkingLotInput>
  }

  export type ParkingTicketUpdateManyWithWhereWithoutParkingLotInput = {
    where: ParkingTicketScalarWhereInput
    data: XOR<ParkingTicketUpdateManyMutationInput, ParkingTicketUncheckedUpdateManyWithoutParkingLotInput>
  }

  export type ParkingLotCreateWithoutParkingTicketsInput = {
    code: string
    parkingName: string
    numberOfAvailableSpace: number
    location: string
    feesPerHour: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingLotUncheckedCreateWithoutParkingTicketsInput = {
    code: string
    parkingName: string
    numberOfAvailableSpace: number
    location: string
    feesPerHour: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingLotCreateOrConnectWithoutParkingTicketsInput = {
    where: ParkingLotWhereUniqueInput
    create: XOR<ParkingLotCreateWithoutParkingTicketsInput, ParkingLotUncheckedCreateWithoutParkingTicketsInput>
  }

  export type UserCreateWithoutParkingLotOrdersInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    role?: $Enums.Role
    emailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutParkingLotOrdersInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    role?: $Enums.Role
    emailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationTokenExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutParkingLotOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParkingLotOrdersInput, UserUncheckedCreateWithoutParkingLotOrdersInput>
  }

  export type ParkingLotUpsertWithoutParkingTicketsInput = {
    update: XOR<ParkingLotUpdateWithoutParkingTicketsInput, ParkingLotUncheckedUpdateWithoutParkingTicketsInput>
    create: XOR<ParkingLotCreateWithoutParkingTicketsInput, ParkingLotUncheckedCreateWithoutParkingTicketsInput>
    where?: ParkingLotWhereInput
  }

  export type ParkingLotUpdateToOneWithWhereWithoutParkingTicketsInput = {
    where?: ParkingLotWhereInput
    data: XOR<ParkingLotUpdateWithoutParkingTicketsInput, ParkingLotUncheckedUpdateWithoutParkingTicketsInput>
  }

  export type ParkingLotUpdateWithoutParkingTicketsInput = {
    code?: StringFieldUpdateOperationsInput | string
    parkingName?: StringFieldUpdateOperationsInput | string
    numberOfAvailableSpace?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    feesPerHour?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingLotUncheckedUpdateWithoutParkingTicketsInput = {
    code?: StringFieldUpdateOperationsInput | string
    parkingName?: StringFieldUpdateOperationsInput | string
    numberOfAvailableSpace?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    feesPerHour?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutParkingLotOrdersInput = {
    update: XOR<UserUpdateWithoutParkingLotOrdersInput, UserUncheckedUpdateWithoutParkingLotOrdersInput>
    create: XOR<UserCreateWithoutParkingLotOrdersInput, UserUncheckedCreateWithoutParkingLotOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutParkingLotOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutParkingLotOrdersInput, UserUncheckedUpdateWithoutParkingLotOrdersInput>
  }

  export type UserUpdateWithoutParkingLotOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutParkingLotOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingTicketCreateManyUserInput = {
    id?: string
    plateNumber: string
    entry_date: Date | string
    exit_date?: Date | string | null
    amount: number
    parking_code: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingTicketUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    entry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    exit_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parkingLot?: ParkingLotUpdateOneRequiredWithoutParkingTicketsNestedInput
  }

  export type ParkingTicketUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    entry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    exit_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    parking_code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingTicketUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    entry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    exit_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    parking_code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingTicketCreateManyParkingLotInput = {
    id?: string
    plateNumber: string
    entry_date: Date | string
    exit_date?: Date | string | null
    amount: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingTicketUpdateWithoutParkingLotInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    entry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    exit_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutParkingLotOrdersNestedInput
  }

  export type ParkingTicketUncheckedUpdateWithoutParkingLotInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    entry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    exit_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingTicketUncheckedUpdateManyWithoutParkingLotInput = {
    id?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    entry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    exit_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}