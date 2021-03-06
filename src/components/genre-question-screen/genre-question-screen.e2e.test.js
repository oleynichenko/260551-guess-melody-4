import GenreQuestionScreen from "@components/genre-question-screen/genre-question-screen";

const mock = {
  question: {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `path`,
        genre: `rock`,
      },
      {
        src: `path`,
        genre: `jazz`,
      },
      {
        src: `path`,
        genre: `jazz`,
      },
      {
        src: `path`,
        genre: `blues`,
      },
    ],
  },
};

describe(`GenreQuestionScreen`, () => {
  it(`When user answers genre question form is not sent`, () => {
    const {question} = mock;
    const onAnswer = jest.fn();

    const screen = Enzyme.shallow(
        <GenreQuestionScreen
          onAnswer={onAnswer}
          question={question}
          renderPlayer={() => {}}
          onChange={() => {}}
          userAnswers={[false, false, false, false]}
        />
    );

    const form = screen.find(`form`);
    const formSendPrevention = jest.fn();

    form.simulate(`submit`, {
      preventDefault: formSendPrevention,
    });

    expect(onAnswer).toHaveBeenCalledTimes(1);
    expect(formSendPrevention).toHaveBeenCalledTimes(1);
  });

  it(`User answer passed to callback is consistent with "userAnswer" prop`, () => {
    const {question} = mock;
    const onAnswer = jest.fn((...args) => [...args]);
    const userAnswer = [false, true, false, false];

    const screen = Enzyme.mount(
        <GenreQuestionScreen
          onChange={() => {}}
          onAnswer={onAnswer}
          question={question}
          renderPlayer={() => {}}
          userAnswers={[false, true, false, false]}
        />
    );

    const form = screen.find(`form`);
    const inputTwo = screen.find(`input`).at(1);

    inputTwo.simulate(`change`, {target: {checked: true}});
    form.simulate(`submit`, {preventDefault() {}});

    expect(onAnswer).toHaveBeenCalledTimes(1);

    expect(onAnswer.mock.calls[0][0]).toEqual(void 0);

    expect(
        screen.find(`input`).map((it) => it.prop(`checked`))
    ).toEqual(userAnswer);
  });
});
