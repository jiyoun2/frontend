package map;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Dictionary {
    public static void main(String[] args) {
        // 컴퓨터 용어 사전 만들기
        Map<String, String> dic = new HashMap<>();

        // 용어 저장
        dic.put("이진수", "컴퓨터가 0과 1로 이루어진 수");
        dic.put("버그", "프로그램이 적절하게 동작하는데 실패하거나 오류가 발생하는 코드");
        dic.put("비트", "정보기술에서 데이터의 가장 작은 단위로 0또는 1의 값을 가진다.");
        dic.put("알고리즘", "이떤 문제를 해결하기 위해 정해진 절차");

        // 사용자 입력
        Scanner sc = new Scanner(System.in);

        System.out.println("==================================");
        System.out.println("프로그램을 종료하려면 Q또는 q를 입력하세요.");
        System.out.println("==================================");
        System.out.println("");


        while (true) {
            System.out.print("검색할 단어를 입력하세요: ");
            String word = sc.nextLine(); // 사용자가 단어 입력

            // 종료 조건
            if(word.toLowerCase().equals("q")) // || word.equals("Q"))
                {
                System.out.println("프로그램을 종료합니다.");
                break;
            }

            String definition = dic.get(word); // 단어로 검색해서 정의를 가져옴

            if(definition == null) {
                System.out.println(word + "은(는) 없는 단어입니다.");
            } else {
                System.out.println(definition);
            }
        }
        sc.close();
    }
}
