import GenreQuestionScreen from "@components/genre-question-screen/genre-question-screen";

const question = {
  type: `genre`,
  genre: `rock`,
  answers: [
    {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    },
    {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `blues`,
    },
    {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `jazz`,
    },
    {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }
  ],
};

describe(`GenreQuestionScreen`, function () {
  it(`should render GenreQuestionScreen with question`, function () {
    const tree = renderer.create((
      <GenreQuestionScreen
        question={question}
        onAnswer={() => {}}
        renderPlayer={() => {}}
        onChange={() => {}}
        userAnswers={[false, false, false, false]}
      />
    ), {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
