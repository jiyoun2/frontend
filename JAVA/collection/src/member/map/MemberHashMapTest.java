package member.map;

import member.Member;

public class MemberHashMapTest {
    public static void main(String[] args) {
        // MemberDAO 인스턴스 생성
        MemberDAO dao = new MemberDAO();

        // 회원 추가 메서드 호출
        dao.addMember(new Member(1001, "이정후"));
        dao.addMember(new Member(1002, "신유빈"));
        dao.addMember(new Member(1003, "우상혁"));

        // 회원 검색 메서드 호출
        dao.showAllMember();

        // 회원 삭제
        dao.removeMember(1003);
        dao.removeMember(1004);

        System.out.println("삭제 후 출력 -----------");
        dao.showAllMember();

    }
}
