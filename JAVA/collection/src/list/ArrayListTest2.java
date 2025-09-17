package list;

import java.util.*;

public class ArrayListTest2 {
    public static void main(String[] args) {
        // 문자를 저장할 ArrayList 생성
        List<String> myList = new ArrayList<>();

        // 요소 추가
        myList.add("A"); // 0번 인덱스
        myList.add("B"); // 1번
        myList.add("D"); // 2번

        // 객체 출력
        System.out.println(myList); // [A, B, D]

        // 요소 추가 (특정 위치) - add(인덱스, "요소")
        myList.add(2, "C");
        System.out.println(myList);

        // 요소 삭제 (안전한 삭제를 위해 요소 존재 확인)
        if(myList.contains("B")){
            myList.remove("B");
        }
        System.out.println(myList);

        // 순서로 출력
        for(int i = 0; i < myList.size(); i++){
            String element = myList.get(i);
            System.out.print(myList + " "); // ln이면 줄바꿈, 없으면 줄바꿈하지 않고 출력
        }

        // 범위로 출력
        for(String element : myList)
            System.out.print(element + " ");
    }
}
