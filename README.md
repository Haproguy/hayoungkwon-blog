#간단한 CRUD구현

##NEXT.js와 firebase를 이용한 CRUD게시판
##프로젝트 기간 22.03.23 ~ 22.04.13(04.14 지인분 피드백으로 수정후 재배포)

###느낀점
*생각보다 SSR의 기능과 장점에 대해 많은걸 알게 되었습니다
*구체적으로는 posting의 list를 보여주는 페이지에서 의도적으로 클라이언트에서 데이터를 받아 페이지를 랜더링 해보았는데 초기 페이지를 랜더링하는 속도에서 큰 차이를 보여주었고 왜 SSR이 다시 사용되기 시작했는지 알수있었습니다.

###프로젝트를 진행하면서 힘들거나 아쉬웠던점
1.NEXT.js 와 firebase라는 새로운 기술을 공부하며 프로젝트를 제작해보다 보니 제작하는 속도가 생각보다 느렸습니다. 그냥 react.js로 만들었다면 좀더 빠르게 만들수 있지 않았을까 생각됩니다

1.구체적으로는 firebase에서 hosting을 할때 꽤 고생했습니다. firebase에 일반적으로 배포를 할때 next.js의 api route기능과 getServerSideProps기능을 지원하지 않아서 다른방법을 찾아야 했고 firebase의 유료버전으로 전환하면 지원한다는 사실을 알게되어 조금은 허탈했습니다.

