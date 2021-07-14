using System.Collections.Generic;
using Commander.Models;

namespace Commander.Data 
{
    public class MockCommanderRepo : ICommanderRepo
    {
        public void CreateCommand(Command cmd)
        {
            throw new System.NotImplementedException();
        }

        public void DeleteCommand(Command cmd)
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<Command> GetAllCommands()
        {
            var commands = new List<Command>
            {
                new Command{Id=0, HowTo="Boil an egg", Line="Boil water", Platform="Ketle & Pan"},
                new Command{Id=1, HowTo="Boil an omelet", Line="Boil Salt", Platform="Ketle & Pan"},
                new Command{Id=2, HowTo="Boil an butter", Line="Boil Bread", Platform="Ketle & Pan"}
            };

            return commands;
        }

        public Command getCommandById(int Id)
        {
            return new Command{Id=0, HowTo="Boil an egg", Line="Boil water", Platform="Ketle & Pan"};
        }

        public bool SaveChanges()
        {
            throw new System.NotImplementedException();
        }

        public void UpdateCommand(Command cmd)
        {
            throw new System.NotImplementedException();
        }
    }
}