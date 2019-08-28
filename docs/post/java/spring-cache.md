---
date : 2019-08-28
---

# Spring cache

## Spring cache
- 스프링 캐시 추상화 적용하기
- 단순한 파라미터를 가지는 api 호출을 캐싱하기 위해 도입

## dependency

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-cache</artifactId>
</dependency>
```
-pring-boot-starter-cache 이외에 아무 서드파트 라이브러리를 추가 하지 않는다면 기본설정인 SimpleCacheConfiguration 가 동작

##  CacheManagerCustomizer interface

- If the CacheManager is auto-configured by Spring Boot, you can further tune its configuration before it is fully initialized by exposing a bean that implements the CacheManagerCustomizer interface.
- CacheManagerCustomizer 인터페이스를 빈에 등록하면 컨피그 조정가능

- 맵에 있는 널값는 패스하기

```java
@Bean
public CacheManagerCustomizer<ConcurrentMapCacheManager> cacheManagerCustomizer() {
	return new CacheManagerCustomizer<ConcurrentMapCacheManager>() {
		@Override
		public void customize(ConcurrentMapCacheManager cacheManager) {
			cacheManager.setAllowNullValues(false);
		}
	};
}
```

## @EnableCaching
- 캐시 사용 선언

```java
@Configuration
@EnableCaching
public class AppConfig {

}
```

## @Cacheable annotation

- As the name implies, @Cacheable is used to demarcate methods that are cacheabl

```java
@Cacheable("books")
public Book findBook(ISBN isbn) {...}
```

- the method findBook is associated with the cache named books. Each time the method is called, the cache is checked to see whether the invocation has been already executed and does not have to be repeated

## Default Key Generation

- Since caches are essentially key-value stores, each invocation of a cached method needs to be translated into a suitable key for cache access.
- If no params are given, return 0.
- If only one param is given, return that instance.
- If more the one param is given, return a key computed from the hashes of all parameters.
- 키 지정안할경우 파라미터 하나면 그 파라미터가 키가되고 여러개 있으면 모든 파라미터 해쉬 붙어서 키 생성됨

## Custom Key Generation Declaration

- 파라미터중에 캐싱키로 안쓰는거 있을 떄 지정할 수 있음

``` java
@Cacheable(value="books", key="#isbn"
public Book findBook(ISBN isbn, boolean checkWarehouse, boolean includeUsed)

@Cacheable(value="books", key="#isbn.rawNumber")
public Book findBook(ISBN isbn, boolean checkWarehouse, boolean includeUsed)

@Cacheable(value="books", key="T(someType).hash(#isbn)")
public Book findBook(ISBN isbn, boolean checkWarehouse, boolean includeUsed)
```

## Conditional caching

- 키값에 조건문 달 수 있음

```java
@Cacheable(value="book", condition="#name.length < 32")
public Book findBook(String name)

@Cacheable(value="book", condition="#name.length < 32", unless="#result.hardback")
public Book findBook(String name)
```

## @CachePut annotation

- 메소드는 항상 실행하는데 캐시는 할 경우

```java
@CacheEvict(value = "books", allEntries=true)
public void loadBooks(InputStream batch)
```

## @CacheEvict annotation

- 캐시 제거

```java
@CacheEvict(value = "books", allEntries=true)
public void loadBooks(InputStream batch)
```

- `allEntries=true` 전체 엔트리 다 지울 때
- `beforeInvocation=true` 메서드 실행 이후(기본값)나 이전에 제거

## references
- [Cache Abstraction](https://docs.spring.io/spring/docs/3.2.x/spring-framework-reference/html/cache.html)
