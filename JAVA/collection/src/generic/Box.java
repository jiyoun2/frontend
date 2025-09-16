package generic;

/// Class 이름<T> -> 일반화 (Generic 프로그래밍)
/// T는 코드 실행 중에 적절한 자료형을 선택함

public class Box<T> {
    // <T>는 type이라는 의미
    private T type;

    public void set(T type) {
        this.type = type;
    }

    public T get() {
        return type;
    }
}