package member.map;

import member.Member;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

/// HashMap을 사용해서 회원추가, 검색, 삭제하는 클래스 정의

public class MemberDAO {
    Map<Integer, Member> hashMap;

    public MemberDAO() {
        hashMap = new HashMap<>();
    }

    // 회원추가
    public void addMember(Member member){
        hashMap.put(member.getMemberId(),member);
    }

    // 회원 전체 검색
    public void showAllMember() {
        // 반복자 사용
        Iterator<Integer> it = hashMap.keySet().iterator();

        while (it.hasNext()) { // 키가 있으면(계속 반복)
            int key = it.next(); // 키를 가져옴
            Member member = hashMap.get(key);
            System.out.println(member);
        }
    }
    // 회원 삭제
    public boolean removeMember (int memberId){
        // 외부 입력한 아이디가 포함되어 있는지 확인해서 삭제
        if(hashMap.containsKey(memberId)) { // 안전한 삭제를 위해 키 존재 확인
            hashMap.remove(memberId);
            return true;
        }
        System.out.println(memberId + "번 ID가 존재하지 않습니다.");
        return false;
    }
}
