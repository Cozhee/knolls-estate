import MaxWidthWrapper from "../components/MaxWidthWrapper";

export default function BoardOfDirectors() {
  return (
    <>
      <MaxWidthWrapper className="py-10">
        <div className="py-20">
          <h1 className="text-5xl">Board of Directors</h1>
        </div>

        <div className="py-5">
          <h4 className="text-2xl font-bold mb-1">Contact The Board</h4>
          <p>
            It is important that our community members engage with the Board
            regarding matters of concern or importance. An informed community is
            a successful community! Email the BoD at{" "}
            <span className="font-bold">office.cpm@gmail.com</span>
          </p>
        </div>
        <div className="py-5">
          <h4 className="text-2xl font-bold mb-1">Meetings</h4>
          <p>
            BoD meetings are typically held virtually the first Monday of the
            month 7 pm. All Board meetings are open to Members and Residents,
            and the meeting agenda is customarily available to the community the
            Friday before the meeting. Members are afforded an opportunity to
            address the Board regarding an agenda topic at the beginning of each
            Board meeting. All meeting agendas and minutes are available in the
            membership account for Member review. Workshops are generally held
            virtually every third Monday of the month at 7pm. Workshops are open
            meetings as well; however, there is no opportunity for Members to
            address the Board. This meeting is a working session for the Board
            of Directors in preparation for the next Board meeting. The meeting
            agenda is customarily available to the community the Friday before
            the meeting.
          </p>
        </div>
        <div className="py-5">
          <h4 className="text-2xl font-bold mb-1">Current Board Members</h4>
          <p>
            President- Greg Gardner:{" "}
            <span className="font-bold">ske97479@gmail.com</span>
          </p>
          <p>Secretary/Treasurer-Tom Schaub</p>
          <p>Terry Wells</p>
          <p>Michael George</p>
          <p>Dian Cox</p>
          <p>Terry Wells</p>
        </div>
        <div className="py-5">
          <h4 className="text-2xl font-bold mb-1">Design Committee</h4>
          <p>Chuck Caylor</p>
          <p>Greg Good</p>
          <p>Tasia Amavisia</p>
        </div>
        <div className="py-5">
          <h4 className="text-2xl font-bold mb-1">Social Committee</h4>
          <p>Dian Cox</p>
          <p>Carole Wells</p>
          <p>Candy Taylor</p>
          <p>Lorrie Lee</p>
          <p>Zach Amavisia</p>
          <p>Mary Dennis</p>
        </div>
        <div className="py-5">
          <h4 className="text-2xl font-bold mb-1">Saftey Committee</h4>
          <p>Michael George </p>
          <p>Peggy Schaub</p>
          <p>Peggy Brummel</p>
        </div>
        <div className="py-5">
          <h4 className="text-2xl font-bold mb-1">Judical Committee</h4>
          <p>Gary Lee</p>
          <p>Roland Berry</p>
          <p>John Lahley</p>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
