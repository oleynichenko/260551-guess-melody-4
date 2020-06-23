import QuestionArtistScreen from "@components/question-artist-screen/question-artist-screen";

const question = {
  type: `artist`,
  song: {
    artist: `Jim Beam`,
    src: `path`,
  },
  answers: [
    {
      picture: `path`,
      artist: `John Snow`,
    },
    {
      picture: `path`,
      artist: `Jack Daniels`,
    },
    {
      picture: `path`,
      artist: `Jim Beam`,
    }
  ],
};

describe(`QuestionArtistScreen`, function () {
  it(`should render QuestionArtistScreen with question`, function () {
    const tree = renderer.create(
        <QuestionArtistScreen
          question={question}
          onAnswer={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
