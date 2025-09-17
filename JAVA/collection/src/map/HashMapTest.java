package map;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

/// Hash: 정보를 저장, 검색을 위한 자료구조
/// 구조; hash(key) = key % n(테이블 크기)
/// map - key, value로 구성된 원소를 저장한 자료구조; 검색이 빠르다, 순서가 없고(무작위), 중복 저장 안됨

public class HashMapTest {
    public static void main(String[] args) {
        // 이름과 점수를 저장할 Map 객체 생성
        Map<String, Integer> map = new HashMap<>();

        // 요소 저장 - map.size()
        map.put("강감찬", 95);
        map.put("홍길동", 75);
        map.put("이순신", 80);
        map.put("홍길동", 80); // key값이 같을경우 수정됨


        // 요소 검색
        System.out.println("홍길동: " + map.get("홍길동")); // 75

        // 전체 요소 출력 - Iterator 반복자 클래스
        Iterator<String> it = map.keySet().iterator(); // keyset(); 중복 안되게 순환
        while (it.hasNext()){ // 요소가 있으면 반복
            String key = it.next(); // key요소를 가져옴
            Integer value = map.get(key);
            System.out.println(key + ": " + value);
        }

    }
}
