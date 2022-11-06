// ** MUI Imports
import { Typography } from '@mui/material'
import ButtonComponent from 'src/components/ButtonComponent'

const Home = () => {
  return (
    <div>
      <Typography>
        {' '}
        This is the is the Action Button.Give title as the Name of the Button.import this <code>&lt;ButtonComponent type='action' title='View' ...props&gt;</code> from
        'src/components/ButtonComponent'
      </Typography>
      <div style={{ display: 'flex', gap: '10px', padding: '20px' }}>
        <ButtonComponent type='action' title='View' />
        <ButtonComponent type='action' title='View' />
        <ButtonComponent type='action' title='View' />
        <ButtonComponent type='action' title='View' />
        <ButtonComponent type='action' title='View' />
      </div>
      <div>
        <Typography>
          {' '}
          This is the is the Button for the TabBar.Give title as the Name of the Button.import this{' '}
          <code>&lt;ButtonComponent type='tabButton' title='Regular' ...props&gt;</code> from 'src/components/ButtonComponent'
        </Typography>
        <div
          style={{
            display: 'flex',
            gap: '10px',
            flexDirection: 'row',
            alignItems: 'flex-start',
            padding: '13px 20px',
            width: '100%',
            height: '66px',
            position: 'relative',
            background: '#ECF8FF',
            boxShadow: '1px 2px 3px rgba(22, 31, 41, 0.2)'
          }}
        >
          <ButtonComponent type='tabButton' title='Regular' isActive={true} />
          <ButtonComponent type='tabButton' title='Regular' isActive={false} />
          <ButtonComponent type='tabButton' title='Regular' isActive={false} />
          <ButtonComponent type='tabButton' title='Regular' isActive={false} />
          <ButtonComponent type='tabButton' title='Regular' isActive={false} />
        </div>
      </div>
      <div>
        <Typography>
          {' '}
          This is the is the Button for the more-less action.Give title as the Name of the Button. import this{' '}
          <code>&lt;ButtonComponent type='more-less' title='more' ...props&gt;</code> from 'src/components/ButtonComponent'
        </Typography>
      </div>
      <div style={{ display: 'flex', gap: '10px', padding: '20px', position: 'relative' }}>
        <ButtonComponent type='more-less' title='more' />
        <ButtonComponent type='more-less' title='more' />
        <ButtonComponent type='more-less' title='more' />
        <ButtonComponent type='more-less' title='more' />
        <ButtonComponent type='more-less' title='more' />
        <ButtonComponent type='more-less' title='more' />
      </div>

      <div>
        <Typography>
          {' '}
          This is the is the Button for selecting Customize Filter or field.Give title as the Name of the Button. It is used for creating customized report.
          import this <code>&lt;ButtonComponent type='select-custom' title='select Filter/Field' ...props&gt;</code> from
          'src/components/ButtonComponent'
        </Typography>
      </div>
      <div style={{ display: 'flex', gap: '10px', padding: '20px', position: 'relative' }}>
        <ButtonComponent type='select-custom' title='select Filter/Field' />
        <ButtonComponent type='select-custom' title='select Filter/Field' />
        <ButtonComponent type='select-custom' title='select Filter/Field' />
        <ButtonComponent type='select-custom' title='select Filter/Field' />
      </div>

      <div>
        <Typography>
          {' '}
          This is the is the Button for jumping to the selected page at the pagination.Give title as the Name of the Button. import this{' '}
          <code>&lt;ButtonComponent type='go'  title='Go'...props&gt;</code> from 'src/components/ButtonComponent'
        </Typography>
      </div>
      <div style={{ display: 'flex', gap: '10px', padding: '20px', position: 'relative' }}>
        <ButtonComponent type='go' title='Go' />
        <ButtonComponent type='go' title='Go' />
        <ButtonComponent type='go' title='Go' />
        <ButtonComponent type='go' title='Go' />
        <ButtonComponent type='go' title='Go' />
      </div>

      <div>
        <Typography>
          {' '}
          This is the is the Button for proceed or continue.Give title as the Name of the Button. import this{' '}
          <code>&lt;ButtonComponent type='proceed' title='Proceed' ...props&gt;</code> from 'src/components/ButtonComponent'
        </Typography>
      </div>
      <div style={{ display: 'flex', gap: '10px', padding: '20px', position: 'relative' }}>
        <ButtonComponent type='proceed' title='Proceed' />
        <ButtonComponent type='proceed' title='Proceed' />
        <ButtonComponent type='proceed' title='Proceed' />
        <ButtonComponent type='proceed' title='Proceed' />
        <ButtonComponent type='proceed' title='Proceed' />
      </div>

      <div>
        <Typography>
          {' '}
          This is the is the apply Button .Give title as the Name of the Button. import this{' '}
          <code>&lt;ButtonComponent type='apply' title='Apply' ...props&gt;</code> from 'src/components/ButtonComponent'
        </Typography>
      </div>
      <div style={{ display: 'flex', gap: '30px', padding: '20px', position: 'relative' }}>
        <ButtonComponent type='apply' title='Apply' />
        <ButtonComponent type='apply' title='Apply' />
        <ButtonComponent type='apply' title='Apply' />
        <ButtonComponent type='apply' title='Apply' />
        
      </div>
      <div>
      <Typography>
          {' '}
          This is the is the cancel Button.Give title as the Name of the Button. import this{' '}
          <code>&lt;ButtonComponent type='cancel' title='cancel' ...props&gt;</code> from 'src/components/ButtonComponent'
        </Typography>
        <div style={{ display: 'flex', gap: '30px', padding: '20px', position: 'relative' }}>
            <ButtonComponent type='cancel' title='cancel' />
            <ButtonComponent type='cancel' title='cancel' />
            <ButtonComponent type='cancel' title='cancel' />
            <ButtonComponent type='cancel' title='cancel' />
        </div>
      </div>

      <div>
         <Typography>
            {' '}
            This is the is the Button for tabButton2 .Give title as the Name of the Button. import this{' '}
            <code>&lt;ButtonComponent type='tabButton2' title='Target Audience Edit' ...props&gt;</code> from 'src/components/ButtonComponent'
          </Typography>
        <div style={{ display: 'flex', gap: '30px', padding: '20px', position: 'relative' }}>
          <ButtonComponent type='tabButton2' title='Target Audience Edit' />
          <ButtonComponent type='tabButton2' title='Target Audience Edit' />
          <ButtonComponent type='tabButton2' title='Target Audience Edit' />
          <ButtonComponent type='tabButton2' title='Target Audience Edit' />
        </div>
      </div>

      <div>
         <Typography>
            {' '}
            This is the is the default Button.If there is no type defined or wrong type included this button will be shown.Give title as the Name of the Button. import this{' '}
            <code>&lt;ButtonComponent title='default' ...props&gt;</code> from 'src/components/ButtonComponent'
          </Typography>
        <div style={{ display: 'flex', gap: '30px', padding: '20px', position: 'relative' }}>
          <ButtonComponent title='default' />
          <ButtonComponent title='default' />
          <ButtonComponent title='default' />
          <ButtonComponent title='default' />
          <ButtonComponent title='default' />
        </div>
      </div>
    </div>
  )
}

export default Home
