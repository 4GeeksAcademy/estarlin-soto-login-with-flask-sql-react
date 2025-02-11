"""empty message

Revision ID: 5241e14bcb47
Revises: c920e360c4ae
Create Date: 2023-12-03 03:25:19.120913

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5241e14bcb47'
down_revision = 'c920e360c4ae'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('first_name', sa.String(length=50), nullable=False))
        batch_op.add_column(sa.Column('last_name', sa.String(length=50), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_column('last_name')
        batch_op.drop_column('first_name')

    # ### end Alembic commands ###
