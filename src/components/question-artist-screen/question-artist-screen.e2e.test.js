import QuestionArtistScreen from "@components/question-artist-screen/question-artist-screen";

const mock = {
  question: {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `path`,
    },
    answers: [
      {
        picture: `pic-one`,
        artist: `John Snow`,
      },
      {
        picture: `pic-two`,
        artist: `Jack Daniels`,
      },
      {
        picture: `pic-three`,
        artist: `Jim Beam`,
      }
    ],
  }
};

describe(`QuestionArtistScreen`, () => {
  it(`When user answers artist question form is not sent`, () => {
    const {question} = mock;
    const onAnswer = jest.fn();
    const userAnswer = {
      picture: `pic-two`,
      artist: `Jack Daniels`,
    };

    const screen = Enzyme.shallow(
        <QuestionArtistScreen
          onAnswer={onAnswer}
          question={question}
          renderPlayer={() => {}}
        />
    );

    const answerInputs = screen.find(`input.artist__input`);
    const answerTwo = answerInputs.at(1);

    answerTwo.simulate(`change`, {preventDefault() {}});

    expect(onAnswer).toHaveBeenCalledTimes(1);
    expect(onAnswer.mock.calls[0][0]).toMatchObject(question);
    expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);
  });
});
